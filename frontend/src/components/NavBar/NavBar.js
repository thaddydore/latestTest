import React from 'react'
import { Dropdown, Nav } from 'react-bootstrap';
import { FcSoundRecordingCopyright } from 'react-icons/fc';

import './navBar.scss';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <Nav.Link href='/'>
        <FcSoundRecordingCopyright size='3rem' />
      </Nav.Link>
      <Nav.Link href="/logs">Activity Logs</Nav.Link>
    </nav>
  )
}

export default Navbar
