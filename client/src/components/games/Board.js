import React from 'react'
import './Board.css'
import { findX, nextPossible } from './Validation'

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn, nextCells) => {
  const nextCell = nextCells[0]

  const possibleArray = nextCell.map(possibility => {
    const possibleArray =
      possibility[0] === rowIndex && 
      possibility[1] === cellIndex
    return possibleArray
  })

  const isPossible = possibleArray.indexOf(true) > -1  

  if (isPossible) {
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
  const nextCells = nextPossible(findX(game.board))
  return < div key={rowIndex} >
    {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex, symbol, false, nextCells))}
  </div >
})