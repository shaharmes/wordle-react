import React, {createContext, useContext} from 'react'
import { AppContext } from '../App';

export function Letter({letterPositin, attemptVal}) {

    const {board} = useContext(AppContext);
    const letter = board[attemptVal][letterPositin];

  return (
    <div className='letter'>{letter}</div>
  )
}
