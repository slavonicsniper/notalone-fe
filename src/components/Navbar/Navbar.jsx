import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './connect-logo.png';
import AuthService from '../../services/AuthService';

function Navbar(props) {

  const handleLogout = () => {
    if(props.loggedIn) {
      AuthService.logout().then((response) => {
        if(response.status === 'Success'){
          props.handleLogin(false)
          window.localStorage.removeItem('data')
        } 
      });
    }
  }

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
        { props.loggedIn ?
        <ul className='menu-list'>  
          <li>
            <Link to='/profile'>{props.userData.username}</Link>
          </li>
          <li>
            <Link to='/' onClick={handleLogout}>Log Out</Link>
          </li>
        </ul>
        :
        <ul className='menu-list'> 
          <li>
            <Link to='/'>Log In</Link>
          </li>
          <li>
            <Link to='/register'>Sign Up</Link>
          </li>
        </ul>
        }
      </div>
    </nav>
  )
}

export default Navbar;