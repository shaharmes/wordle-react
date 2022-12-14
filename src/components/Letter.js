import React, { useContext} from 'react'
import { AppContext } from '../App';

export function Letter({letterPositin, attemptVal}) {

    const {board} = useContext(AppContext);
    const letter = board[attemptVal][letterPositin];

  return (
    <input type="text" style={{width: '1em'}} className='letter' value={letter}></input>
  )
}
