import './App.css';
import React from 'react';
import { Outlet } from 'react-router-dom';



function App() {


  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <Outlet />
    </div>
    )};


export default App;
