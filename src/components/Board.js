import { Letter } from "./Letter";


export function Board () {

    const l = [0, 1, 2, 3, 4]; // this list used twice

  return (
    <div className="board">
      <div className="row">
        <Letter letterPositin={0} attemptVal={0} />
        <Letter letterPositin={1} attemptVal={0} />
        <Letter letterPositin={2} attemptVal={0} />
        <Letter letterPositin={3} attemptVal={0} />
        <Letter letterPositin={4} attemptVal={0} />
      </div>
      <div className="row">
        <Letter letterPositin={0} attemptVal={1} />
        <Letter letterPositin={1} attemptVal={1} />
        <Letter letterPositin={2} attemptVal={1} />
        <Letter letterPositin={3} attemptVal={1} />
        <Letter letterPositin={4} attemptVal={1} />
      </div>
      <div className="row">
        <Letter letterPositin={0} attemptVal={2} />
        <Letter letterPositin={1} attemptVal={2} />
        <Letter letterPositin={2} attemptVal={2} />
        <Letter letterPositin={3} attemptVal={2} />
        <Letter letterPositin={4} attemptVal={2} />
      </div>
      <div className="row">
        <Letter letterPositin={0} attemptVal={3} />
        <Letter letterPositin={1} attemptVal={3} />
        <Letter letterPositin={2} attemptVal={3} />
        <Letter letterPositin={3} attemptVal={3} />
        <Letter letterPositin={4} attemptVal={3} />
      </div>
      <div className="row">
        <Letter letterPositin={0} attemptVal={4} />
        <Letter letterPositin={1} attemptVal={4} />
        <Letter letterPositin={2} attemptVal={4} />
        <Letter letterPositin={3} attemptVal={4} />
        <Letter letterPositin={4} attemptVal={4} />
      </div>
      <div className="row">
        <Letter letterPositin={0} attemptVal={5} />
        <Letter letterPositin={1} attemptVal={5} />
        <Letter letterPositin={2} attemptVal={5} />
        <Letter letterPositin={3} attemptVal={5} />
        <Letter letterPositin={4} attemptVal={5} />
      </div>
    </div>
  )
}
