import React, {useContext} from 'react'
import { AppContext } from '../providers/AppContext';



export function Key({keyVal , bigKey}) {

    const {boardHandler} = useContext(AppContext);

    let keyState = '';

    function clickHandle () {

      boardHandler(keyVal);
    }


    if(bigKey){
      keyState = 'big';
    }
   

  return (
    <div className='key' id={keyState} onClick={clickHandle}>
        {keyVal}
    </div>
  )
}
