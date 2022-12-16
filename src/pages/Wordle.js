import { AppContext } from '../providers/AppContext';
import {Board} from '../components/Board';
import {Keyboard} from '../components/Keyboard';
import '../App.css';
import React, {useEffect, useState} from 'react';
import {boardDefault} from '../components/Words';

export function Wordle() {

    const [board, setBoard] = useState(boardDefault);
    const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});

    const word = 'LEMON';

    const [correctLetters, setCorrectLetters] = useState([]);
    const [almostLetters, setAlmostLetters] = useState([]);
    const [errorLetters, setErrorLetters] = useState([]);

    useEffect(() => {
      document.getElementById('game').focus();
    }, [])

    
    useEffect(() => {
        if (currentAttempt.attempt > 0){
          const newAttempt = board[currentAttempt.attempt - 1].join('');
            newAttempt.split('').forEach((letter, index) => {
                if (word[index] === newAttempt[index]){
                    correctLetters.push(letter);
                } 
                if (word.includes(letter) && word[index] !== newAttempt[index]){
                    almostLetters.push(letter);
                }
                if (!word.includes(letter)){
                    errorLetters.push(letter);
                }
                
                setAlmostLetters([...almostLetters]);
                setCorrectLetters([...correctLetters]);
                setErrorLetters([...errorLetters]);
            })
            }
        
    }, [currentAttempt.attempt])
    

  
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

      if (currentAttempt.letterPosition === 4){
        setTimeout(() => alert("done"), 1)
      }
    }

    return (
        <AppContext.Provider value = {{
          board, 
          setBoard, 
          currentAttempt, 
          setCurrentAttempt, 
          boardHandler, 
          word,
          correctLetters,
          almostLetters,
          errorLetters}}>
            <div id='game' onKeyDown ={e => boardHandler(e.key.toUpperCase())} tabIndex="0">
                <Board/>
                <Keyboard/>
            </div>
        </AppContext.Provider>
    )
}