import React, { useContext} from 'react'
import { AppContext } from '../providers/AppContext';

export function Letter({letterPositin, attemptVal}) {

    const {board, word, currentAttempt} = useContext(AppContext);
    const letter = board[attemptVal][letterPositin];

    const correct = ( word[letterPositin] === letter );
    const almost = !correct && letter !== '' && word.includes(letter);
    let letterState = '';

    if (currentAttempt.attempt > attemptVal){
      if (correct){
        letterState = 'correct';
      }
  
      if (almost){
        letterState = 'almost';
      }

      if (!correct && !almost){
        letterState = 'error';
      }
    }  

    

  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}
