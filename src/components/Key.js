import React, {useContext} from 'react'
import { AppContext } from '../providers/AppContext';



export function Key({keyVal , bigKey}) {

    const {boardHandler} = useContext(AppContext);

    function clickHandle () {
      boardHandler(keyVal);
    }

  return (
    <div className='key' id={bigKey && 'big'} onClick={clickHandle}>
        {keyVal}
    </div>
  )
}
