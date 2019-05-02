import React from 'react'
import './Board.css'
import { findX, nextPossible } from './Validation'

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn, foundX, nextCells) => {
  const nextCell = nextCells[0]

  const possibleArray = nextCell.map(possibility => {
    const possibleArray =
      possibility[0] === rowIndex && 
      possibility[1] === cellIndex
    return possibleArray
  })

  const chosenArray = foundX.arrX.map(chosen => {
    const chosenArray =
      chosen[0] === rowIndex && 
      chosen[1] === cellIndex
    return chosenArray
  })

  const isPossible = possibleArray.indexOf(true) > -1 
  const isChosen = chosenArray.indexOf(true) > -1

  if (isChosen) {
    return (
      <button 
        className="board-tile-chosen"
        disabled={hasTurn}
        onClick={() => makeMove(rowIndex, cellIndex)}
        key={`${rowIndex}-${cellIndex}`}
      >{symbol || '-'}</button>
    )
  } else if (isPossible) {
    return (
      <button 
        className="board-tile-possible"
        disabled={hasTurn}
        onClick={() => makeMove(rowIndex, cellIndex)}
        key={`${rowIndex}-${cellIndex}`}
      >{symbol || '-'}</button>
    )
  } else if (!isPossible) {
    return (
      <button
        className="board-tile"
        disabled={hasTurn}
        key={`${rowIndex}-${cellIndex}`}
      >{symbol || '-'}</button>
    )
  }
}

export default ({ game, makeMove }) => game.board.map((cells, rowIndex) => {
  const foundX = findX(game.board)
  const nextCells = nextPossible(foundX)
  return < div key={rowIndex} >
    {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex, symbol, false, foundX, nextCells))}
  </div >
})