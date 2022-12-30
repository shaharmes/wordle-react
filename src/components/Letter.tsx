import React, { useContext} from 'react'
import { AppContext } from '../providers/AppContext';

export function Letter({letterPositin, attemptVal}:{letterPositin: number, attemptVal: number}) : JSX.Element {

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
    
    function isCurrentAttempt() {
      return (currentAttempt.attempt === attemptVal && currentAttempt.letterPosition === letterPositin);
    }

  return (
    <div className='letter' id={letterState} key={Math.random()} 
    style={ isCurrentAttempt() ? {border:"1.5px solid red"} : (letter ? {border:"1.5px solid white"} : {})}>
      {letter}
    </div>
  )
}
