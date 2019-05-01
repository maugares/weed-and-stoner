export const findX = (board) => {
  const arrX = []
  const arrXs = []
  for (let row = 0; row < board.length; row++) {
    for (let cell = 0; cell < board[row].length; cell++) {
      if (board[row][cell] === 'x') {
        arrX.push([row, cell])
        arrXs.push(`[${row},${cell}]`)
      }
    }
  }
  return { arrX, arrXs }
}