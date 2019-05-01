import React from 'react'
import './Board.css'
import { findX, nextPossible } from './Validation'

const renderCel = (makeMove, rowIndex, cellIndex, symbol, hasTurn, nextCells) => {
  // console.log(`${rowIndex},${cellIndex}`)
  // console.log('nextCells:', nextCells[0])
  // console.log('rowIndex:', rowIndex)
  // console.log('cellIndex:', cellIndex)
  const nextCell = nextCells[0]

  // console.log(nextCell)
  const possibleArray = nextCell.map(possibility => {
    const possibleArray =
      possibility[0] === rowIndex && 
      possibility[1] === cellIndex
    // console.log(possibleArray)
    return possibleArray
  })

  const isPossible = possibleArray.indexOf(true) > -1
  console.log(isPossible)

  

  if (isPossible) {
    return (
      <button 
        className="board-tile-choose"
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
