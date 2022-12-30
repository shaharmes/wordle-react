import './css/App.scss';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavContext } from './providers/NavContext';
import { NavBar } from './components/NavBar';


function App() {

  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);

  const [showLogin, setShowLogin] = useState<boolean>(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const [user, setUser] = useState<string | null>('');


  return (
    <div className="App">
      <NavContext.Provider value={{show, setShow, handleShow, showLogin, setShowLogin, handleShowLogin, user, setUser, handleCloseLogin}}>
        <NavBar/>
        <Outlet />
      </NavContext.Provider>
    </div>
    )};

export default App;
