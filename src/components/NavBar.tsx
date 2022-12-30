import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalHelp } from './ModalHelp'
import { NavContext } from '../providers/NavContext'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { ModalLogin } from './ModalLogin'


export function NavBar() : JSX.Element {

  const {handleShow, handleShowLogin} = useContext(NavContext);

  let navigate = useNavigate();
  
  const sendHome = () => {
 
        navigate('/');
    }

  return (
    <nav className="navbar navbar-dark bg-dark" id='navB'>
        <div id="navLeft">
          <Button className="navbar-brand" id="navRight" variant="primay" onClick={sendHome}>Home</Button>
          <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleShowLogin}>Login</Button>
          <ModalLogin />
        </div>
        <h1>Wordle</h1>
        <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleShow}>Info</Button>
        <ModalHelp />
    </nav>
  )
}
