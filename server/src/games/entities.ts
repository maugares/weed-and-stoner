import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'

export type Symbol = 'x' | 'o'
export type Row = [Symbol | null, Symbol | null, Symbol | null]
export type Board = [Row, Row, Row]

type Status = 'pending' | 'started' | 'finished'

const emptyRow: Row = [null, null, null, null, null, null, null, null, null]
const emptyBoard: Board = [emptyRow, emptyRow, emptyRow, emptyRow, [null, null, null, null, 'x', null, null, null, null],emptyRow, emptyRow, emptyRow, emptyRow]

@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json', { default: emptyBoard })
  board: Board

  @Column('char', { length: 1, default: 0 })
  userMoving: number

  @Column('char', { length: 1, nullable: true })
  winner: Symbol

  @Column('text', { default: 'pending' })
  status: Status

  @Column('json', { default: emptyBoard })
  blocked: Board

  @Column('json', { default: emptyBoard })
  board2: Board

  @Column('int', { default: 0 })
  played1: number

  @Column('int', { default: 0 })
  played2: number

  @Column('char', { length: 3, default: '---' })
  clickedCell1: string

  @Column('char', { length: 3, default: '---' })
  clickedCell2: string


  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, { eager: true })
  players: Player[]
}

@Entity()
@Index(['game', 'user', 'symbol'], { unique: true })
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  @Column('char', { length: 1 })
  symbol: Symbol

  @Column('integer', { name: 'user_id' })
  userId: number
}
