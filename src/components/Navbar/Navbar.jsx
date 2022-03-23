import React from 'react'
import './Navbar.css';
import logo from './connect-logo.png';

function Navbar() {


  //somehow add logic into JSX if isUserLoggedIn=true don't show Login/Register

  return (
    <nav>
      <div>
        <div className='left-side-navbar'>
          <div className='logo-img-navbar'>
            <img src={logo} className='logo-img'/>
          </div>
          <div className='logo-img-text'>
            NOT<font>Alone</font>
          </div>
        </div>
      </div>

      {/* <i className='fa fa-bars'></i> */}
      

      <div className='right-side-navbar'>
        <ul className='menu-list'>
          <li>
            <a href='/login'>Log In</a>
          </li>
          <li>
          <a href='/register'>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;