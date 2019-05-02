import {
  JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
  Body, Patch
} from 'routing-controllers'
import User from '../users/entity'
import { Game, Player, Board } from './entities'
import { IsBoard, isValidTransition, calculateWinner, finished } from './logic'
import { Validate } from 'class-validator'
import { io } from '../index'

class GameUpdate {

  @Validate(IsBoard, {
    message: 'Not a valid board'
  })
  board: Board
}

@JsonController()
export default class GameController {

  @Authorized()
  @Post('/games')
  @HttpCode(201)
  async createGame(
    @CurrentUser() user: User
  ) {
    const entity = await Game.create().save()

    await Player.create({
      game: entity,
      user,
      symbol: 'x'
    }).save()

    const game = await Game.findOneById(entity.id)

    io.emit('action', {
      type: 'ADD_GAME',
      payload: game
    })

    return game
  }

  @Authorized()
  @Post('/games/:id([0-9]+)/players')
  @HttpCode(201)
  async joinGame(
    @CurrentUser() user: User,
    @Param('id') gameId: number
  ) {
    const game = await Game.findOneById(gameId)
    if (!game) throw new BadRequestError(`Game does not exist`)
    if (game.status !== 'pending') throw new BadRequestError(`Game is already started`)

    game.status = 'started'
    await game.save()

    const player = await Player.create({
      game,
      user,
      symbol: 'o'
    }).save()

    io.emit('action', {
      type: 'UPDATE_GAME',
      payload: await Game.findOneById(game.id)
    })

    return player
  }

  @Authorized()
  // the reason that we're using patch here is because this request is not idempotent
  // http://restcookbook.com/HTTP%20Methods/idempotency/
  // try to fire the same requests twice, see what happens
  @Patch('/games/:id([0-9]+)')
  async updateGame(
    @CurrentUser() user: User,
    @Param('id') gameId: number,
    @Body() update: any
  ) {
    // console.log('update test:', update.game)

    const game = await Game.findOneById(gameId)
    if (!game) throw new NotFoundError(`Game does not exist`)

    const updateBoard = update.game

    const { board, board1, board2, userPlay, clickedCell1, clickedCell2 } = updateBoard

    const clickCoords1 = clickedCell1.split("-")
    const [x1, y1] = clickCoords1
    console.log('board1:', board1[x1][y1])


    const clickCoords2 = clickedCell2.split("-")
    const [x2, y2] = clickCoords2
    console.log('board2:', board2[x2][y2])


    if (userPlay === 1) {
      game.board2 = updateBoard.board2
      game.clickedCell2 = updateBoard.clickedCell2
    } else if (userPlay === 2) {
      game.board2 = updateBoard.board2
      game.clickedCell2 = updateBoard.clickedCell2
    }
    game.save()

    const b1b2Same = (JSON.stringify(game.clickedCell1) === JSON.stringify(game.clickedCell2))

    // console.log(board1)

    // if (!b1b2Same) {
    //   game.board = update.board
    //   await game.save()

    //   io.emit('action', {
    //     type: 'UPDATE_GAME',
    //     payload: game
    //   })

    //   return game
    // }

    // const player = await Player.findOne({ user, game })

    // console.log('game:', game)

    if (!player) throw new ForbiddenError(`You are not part of this game`)
    if (game.status !== 'started') throw new BadRequestError(`The game is not started yet`)
    // if (player.symbol !== game.turn) throw new BadRequestError(`It's not your turn`)
    if (!isValidTransition(player.symbol, game.board, update.board)) {
      throw new BadRequestError(`Invalid move`)
    }

    const winner = calculateWinner(update.board)
    if (winner) {
      game.winner = winner
      game.status = 'finished'
    }
    else if (finished(update.board)) {
      game.status = 'finished'
    }
    else {
      game.round += 1
    }
  }

  @Authorized()
  @Get('/games/:id([0-9]+)')
  getGame(
    @Param('id') id: number
  ) {
    return Game.findOneById(id)
  }

  @Authorized()
  @Get('/games')
  getGames() {
    return Game.find()
  }
}