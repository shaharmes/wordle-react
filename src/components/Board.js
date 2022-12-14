import { Letter } from "./Letter";


export function Board () {

  const lstLetters = [0, 1, 2, 3, 4];

  const lstRows = [0, 1, 2, 3, 4, 5]

  function createRow (row) {
    return (
      <div className="row">
        {lstLetters.map( num => (<Letter letterPositin={num} attemptVal={row} />))}
      </div>
    )
  }

  return (
    <div className="board">
      {lstRows.map( row => createRow(row))}
    </div>
  )
}