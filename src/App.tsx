import './css/App.scss';
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
        <Outlet />
      </NavContext.Provider>
    </div>
    )};

export default App;
