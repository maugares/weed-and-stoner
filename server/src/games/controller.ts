import {
  JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
  Body, Patch
} from 'routing-controllers'
import User from '../users/entity'
import { Game, Player } from './entities'
import { calculateWinner, finished } from './logic'
import { io } from '../index'

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

    // Get saved game from the DB
    const game = await Game.findOneById(gameId)
    if (!game) throw new NotFoundError(`Game does not exist`)

    // Get the current state of the game
    const updateBoard = update.game
    // Destructure updateBoard in useful elements
    const { clickedCell } = updateBoard

    // Update the DB with the cells chosen by the players
    if (user.id === 1) {
      // Get coordinates of o
      game.clickedCell1 = clickedCell
      game.played1 = 1
    } else if (user.id === 2) {
      // Get coordinates of o
      game.clickedCell2 = clickedCell
      game.played2 = 1
    }
    await game.save()

    // Evaluate if the chosen cell is the same
    const b1 = game.clickedCell1
    const b2 = game.clickedCell2

    const b1b2Same = b1 === b2
    const allPlayed = game.played1 && game.played2

    function markCell(clickedCell, symbol) {
      const [rowIndex, columnIndex] = clickedCell.split('-')
      if (game) game.board[rowIndex][columnIndex] = symbol
    }

    if (!b1b2Same && allPlayed) {
      markCell(game.clickedCell1, 'x')
      game.clickedCell1 = '---'
      game.clickedCell2 = '---'
      game.played1 = 0
      game.played2 = 0
    } else if (b1b2Same && allPlayed) {
      markCell(game.clickedCell2, 'o')      
      game.clickedCell1 = '---'
      game.clickedCell2 = '---'
      game.played1 = 0
      game.played2 = 0
    }
    await game.save()

    io.emit('action', {
      type: 'UPDATE_GAME',
      payload: game
    })
    return game
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