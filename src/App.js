import './App.css';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavContext } from './providers/NavContext';
import { NavBar } from './components/NavBar';





function App() {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <NavContext.Provider value={{show, setShow, handleShow}}>
        <NavBar/>
      </NavContext.Provider>
      <Outlet />
    </div>
    )};

export default App;
