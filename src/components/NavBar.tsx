import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ModalHelp } from './ModalHelp'
import { NavContext } from '../providers/NavContext'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { ModalLogin } from './ModalLogin'


export function NavBar() : JSX.Element {

  const {handleShow, handleShowLogin, user, setUser} = useContext(NavContext);

  let navigate = useNavigate();
  
  const sendHome = () => {
 
        navigate('/');
    }

  const handleLogout = () => {
    setUser('');
    sendHome();
  }

  return (
    <nav className="navbar navbar-dark bg-dark" id='navB'>
        <div id="navLeft">
          <Button className="navbar-brand" id="navRight" variant="primay" onClick={sendHome}>Home</Button>
          { user ? <Button className="navbar-brand user" id="navRight" variant="primay">Hi,&nbsp;&nbsp;&nbsp;{user}!&nbsp;:)</Button> : 
          <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleShowLogin}>Login</Button>}
          {user ? <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleLogout}>Logout</Button> : null}
          <ModalLogin />
        </div>
        <h1>Wordle</h1>
        <Button className="navbar-brand" id="navRight" variant="primay" onClick={handleShow}>Info</Button>
        <ModalHelp />
    </nav>
  )
}
