import React from 'react'
import { Link } from 'react-router-dom'
import { ModalHelp } from './ModalHelp'
import { NavContext } from '../providers/NavContext'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'


export function NavBar() : JSX.Element {

  const {handleShow} = useContext(NavContext);

  return (
    <nav className="navbar navbar-dark bg-dark" id='navB'>
        <Link className="navbar-brand" to={'/'}>Home</Link>
        <h1>Wordle</h1>
        <Button className="navbar-brand" variant="primay" onClick={handleShow}>Info</Button>
        <ModalHelp />
    </nav>
  )
}
