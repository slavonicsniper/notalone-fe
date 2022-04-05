import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from './connect-logo.png';
import AuthService from '../../services/AuthService';
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'

function Navigation(props) {

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
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid="xxl">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        NOTAlone
        </Navbar.Brand>
        {props.loggedIn &&
        <>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Activities</Nav.Link>
              <Nav.Link href="#pricing">Availabilities</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/profile">{props.userData.username}</Nav.Link>
              <Nav.Link>
                <Link to="/" onClick={handleLogout}>
                Log out
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>
        }
                
      </Container>
    </Navbar>
  )
}

export default Navigation;