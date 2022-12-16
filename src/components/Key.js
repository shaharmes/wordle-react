import React, {useContext} from 'react'
import { AppContext } from '../providers/AppContext';



export function Key({keyVal}) {

    const {boardHandler, correctLetters, almostLetters, errorLetters} = useContext(AppContext);


    function clickHandle () {

      boardHandler(keyVal);
    }

    let keyState = '';

    if (correctLetters.includes(keyVal)){
      keyState = 'correct';
    } else if (almostLetters.includes(keyVal)){
      keyState = 'almost';
    } else if (errorLetters.includes(keyVal)){
      keyState = 'error';
    }



  return (
    <div className='key' id={keyState} onClick={clickHandle}>
        {keyVal}
    </div>
  )
}
