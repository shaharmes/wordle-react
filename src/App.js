import {Board} from './components/Board';
import {Keyboard} from './components/Keyboard';
import './App.css';
import React, {useState, createContext, useEffect} from 'react';
import {boardDefault} from './components/Words';



export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({attempt: 0, letterPosition: 0})

  useEffect(() => {
    console.log('1');
    setCurrentAttempt({attempt: 0, letterPosition: 0});
  }, [])


  function boardHandler(keyVal) {
    console.log('yes');
    if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(keyVal) === -1){
      return;
    }
    if (currentAttempt.letterPosition > 4){
      currentAttempt.attempt = currentAttempt.attempt + 1;
      currentAttempt.letterPosition = 0;
      setCurrentAttempt({...currentAttempt});
    }
    const newBoard = [...board];
    console.log(keyVal);
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({...currentAttempt, letterPosition: currentAttempt.letterPosition + 1})
    
  }

  return (
    <div autoFocus className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value = {{board, setBoard, currentAttempt, setCurrentAttempt, boardHandler}}>
        <div className='game' onKeyDown={(e) => boardHandler(e.key.toUpperCase())} tabIndex="0">
          <Board/>
          <Keyboard/>
        </div>
      </AppContext.Provider>
    </div>
    )};


export default App;
