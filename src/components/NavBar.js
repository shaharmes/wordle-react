import React from 'react'
import { Link } from 'react-router-dom'
import { ModalHelp } from './ModalHelp'
import { NavContext } from '../providers/NavContext'
import { useContext } from 'react'

export function NavBar() {

    const {handleShow} = useContext(NavContext);

  return (
    <nav className="navbar navbar-dark bg-dark" id='navB'>
        <Link className="navbar-brand" to={'/'}>Home</Link>
        <h1>Wordle</h1>
        <Link className="navbar-brand" variant="primary" onClick={handleShow}>Info</Link>
        <ModalHelp />
    </nav>
  )
}
