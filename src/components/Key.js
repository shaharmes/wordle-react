import React, {useContext} from 'react'
import { AppContext } from '../App'


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
