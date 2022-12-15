import React from 'react'
import { Link } from 'react-router-dom'
import { ModalHelp } from './ModalHelp'
import { NavContext } from '../providers/NavContext'
import { useContext } from 'react'

export function NavBar() {

    const {handleShow} = useContext(NavContext);

  return (
    <nav class="navbar navbar-dark bg-dark" id='navB'>
        <Link class="navbar-brand" to={'/'}>Home</Link>
        <h1>Wordle</h1>
        <Link class="navbar-brand" variant="primary" onClick={handleShow}>Info</Link>
        <ModalHelp />
    </nav>
  )
}
