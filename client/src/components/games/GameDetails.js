import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getGames, joinGame, updateGame } from '../../actions/games'
import { getUsers } from '../../actions/users'
import { userId } from '../../jwt'
import Paper from '@material-ui/core/Paper'
import Board from './Board'
import './GameDetails.css'
import { findX, nextPossible } from './Validation'

class GameDetails extends PureComponent {

  componentWillMount() {
    if (this.props.authenticated) {
      if (this.props.game === null) this.props.getGames()
      if (this.props.users === null) this.props.getUsers()
    }
  }

  joinGame = () => this.props.joinGame(this.props.game.id)

  makeMove = (toRow, toCell) => {
    const { game, updateGame, userId } = this.props
    const clicked = [toRow, toCell]
    console.log('Clicked:', clicked)
    console.log('User clicking:', userId)
    console.log('game', game)

    if (userId === 1) {
      game.clickedCell = `${toRow}-${toCell}`
      updateGame(game.id, game)

    } else if (userId === 2) {
      game.clickedCell = `${toRow}-${toCell}`
      updateGame(game.id, game)
    }
  }


  render() {
    const { game, users, authenticated, userId } = this.props

    const userRole = userId === 1 ? 'Weed' : "Stoner"

    console.log('userRole:', userRole)

    if (!authenticated) return (
      <Redirect to="/login" />
    )

    if (game === null || users === null) return 'Loading...'
    if (!game) return 'Not found'

    const player = game.players.find(p => p.userId === userId)

    const winner = game.players
      .filter(p => p.symbol === game.winner)
      .map(p => p.userId)[0]

    return (<Paper className="outer-paper">
      <h1>Game #{game.id}</h1>

      <p>Role: {userRole}</p>

      {
        game.status === 'started' &&
        player && player.symbol === game.turn &&
        <div>It's your turn!</div>
      }
      {
        game.status === 'pending' &&
        game.players.map(p => p.userId).indexOf(userId) === -1 &&
        <button onClick={this.joinGame}>Join Game</button>
      }
      {
        winner &&
        <p>Winner: {users[winner].firstName}</p>
      }
      <hr />
      {
        game.status !== 'pending' &&
        <Board game={game} makeMove={this.makeMove} />
      }
    </Paper>)
  }
}
const mapStateToProps = (state, props) => ({
  authenticated: state.currentUser !== null,
  userId: state.currentUser && userId(state.currentUser.jwt),
  game: state.games && state.games[props.match.params.id],
  users: state.users
})
const mapDispatchToProps = {
  getGames, getUsers, joinGame, updateGame
}
export default connect(mapStateToProps, mapDispatchToProps)(GameDetails)
