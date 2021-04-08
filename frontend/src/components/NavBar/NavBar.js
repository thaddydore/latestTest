import React from 'react'
import { Dropdown, Nav } from 'react-bootstrap';
import { FcSoundRecordingCopyright } from 'react-icons/fc';

import './navBar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo-container'>
        <div className='navbar--avatar'>
          <Nav.Link href='/'>
            <FcSoundRecordingCopyright size='2rem' />
          </Nav.Link>
        </div>
      </div>

      <Dropdown>
        <div className='mr-2 navbar__notification'>
          <span className='navbar__notification--notification-icon'>
            <Nav.Link href="/logs">Activity Logs</Nav.Link>
          </span>
        </div>
        <Dropdown.Toggle
          variant='outline'
          id='dropdown-basic'
          className='d-flex'
        >
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* </div> */}
    </nav>
  )
}

export default Navbar
