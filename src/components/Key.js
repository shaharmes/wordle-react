import React, {useContext} from 'react'
import { AppContext } from '../App'


export function Key({keyVal , bigKey}) {

    const {board, setBoard , currentAttempt, setCurrentAttempt} = useContext(AppContext);
    function selectLetter() {
        console.log(currentAttempt);
        if (currentAttempt.letterPosition > 4){
            currentAttempt.attempt = currentAttempt.attempt + 1;
            currentAttempt.letterPosition = 0;
            setCurrentAttempt({...currentAttempt});
        }
        const newBoard = [...board];
        newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal;
        setBoard(newBoard);
        setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
    }

  return (
    <div className='key' id={bigKey && 'big'} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}
