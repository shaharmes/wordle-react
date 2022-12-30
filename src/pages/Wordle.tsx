import { AppContext } from '../providers/AppContext';
import {Board} from '../components/Board';
import {Keyboard} from '../components/Keyboard';
import '../css/App.scss'
import React, {useEffect, useRef, useState} from 'react';
import {boardDefault} from '../components/boardDefault';
// import {wordBank} from '../wordBank/wordBank';
import {ModalGame} from '../components/ModalGame';

export function Wordle() {

    const [board, setBoard] = useState<string[][]>(boardDefault());
    const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0});
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [almostLetters, setAlmostLetters] = useState<string[]>([]);
    const [errorLetters, setErrorLetters] = useState<string[]>([]);
    // const wordSet = useRef(new Set(wordBank));
    const [show, setShow] = useState(false);
    let gameResult = useRef<string | null>(null);
  
    const handleShow = () => setShow(true);

    const word = 'LEMON';

    useEffect(() => {
      document.getElementById('game')?.focus();
    }, [])

    useEffect(() => {
        if (currentAttempt.attempt > 0){
          const newAttempt = board[currentAttempt.attempt - 1].join('');
            newAttempt.split('').forEach((letter : string, index: number) => {
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

    function gameReset() {
      setBoard(boardDefault());
      setCurrentAttempt({attempt: 0, letterPosition: 0});
      setCorrectLetters([]);
      setAlmostLetters([]);
      setErrorLetters([]);
      return;
    }

    // function caseEnter () {
    //   if (currentAttempt.letterPosition !== 5) return;

    //     let currWord = board[currentAttempt.attempt].join('');

    //     if (currWord === word) {
    //       setCurrentAttempt({...currentAttempt, attempt: currentAttempt.attempt + 1})
    //       gameResult.current  = 'Win';
    //       return handleShow();
    //     }

    //     if (currentAttempt.attempt === 5 && currWord !== word) {
    //       setCurrentAttempt({...currentAttempt, attempt: currentAttempt.attempt + 1})
    //       gameResult.current = 'Lose';
    //       return handleShow();
    //     }

    //     if (wordSet.current.has(currWord.toLowerCase())){
    //       return setCurrentAttempt({...currentAttempt, attempt: currentAttempt.attempt + 1, letterPosition: 0})
    //     }

    //     return alert("Word not found");
    // }

    function checkWin() {
      let currWord = board[currentAttempt.attempt].join('');

      if (currWord === word) {
        gameResult.current  = 'Win';
        return handleShow();
      }
    }

    function caseDelete () {
      if (currentAttempt.letterPosition === 0) return;

      const newBoardDelete = [...board];
      newBoardDelete[currentAttempt.attempt][currentAttempt.letterPosition - 1] = '';
      setBoard(newBoardDelete);
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition - 1})
      return;
      
    }

  
    function boardHandler(keyVal:string) {
      if (keyVal === 'DELETE' || keyVal === 'BACKSPACE') return caseDelete();

      // if (keyVal === 'ENTER') return caseEnter();

      if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(keyVal) === -1 ) return;

      if (currentAttempt.letterPosition === 5) return;

     
      const newBoard = [...board]; //case letter
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal;
      setBoard(newBoard);
      setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})

      
      if (currentAttempt.letterPosition === 4){
        console.log('done');
        setCurrentAttempt({...currentAttempt, attempt: currentAttempt.attempt + 1, letterPosition: 0})
        checkWin();
        return;
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
          errorLetters,
          show,
          setShow,
          gameReset,
          gameResult}}>
            <div id='game' onKeyDown ={e => boardHandler(e.key.toUpperCase())} tabIndex={0}>
                <Board/>
                <Keyboard/>
                <ModalGame/>
            </div>
        </AppContext.Provider>
    )
}