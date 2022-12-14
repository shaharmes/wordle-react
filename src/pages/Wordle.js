import { AppContext } from '../providers/AppContext';
import {Board} from '../components/Board';
import {Keyboard} from '../components/Keyboard';
import '../App.css';
import React, {useState} from 'react';
import {boardDefault} from '../components/Words';

export function Wordle() {

    const [board, setBoard] = useState(boardDefault);
    const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})
  
  
    function boardHandler(keyVal) {
      if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(keyVal) === -1){
        return;
      }
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
        <AppContext.Provider value = {{board, setBoard, currentAttempt, setCurrentAttempt, boardHandler}}>
            <div className='game' onKeyDown ={e => boardHandler(e.key.toUpperCase())} tabIndex="0">
                <Board/>
                <Keyboard/>
            </div>
        </AppContext.Provider>
    )
}