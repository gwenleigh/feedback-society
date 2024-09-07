import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className='fixed-top border-black navbar-custom'>
      <div className='flex-row nav-bar-padding'>
        <Navbar.Brand className='font-bold' as={Link} to="/" >Feedback Society</Navbar.Brand>
        <Navbar.Brand className='fs-6 mt-navbar '>Speak, give feedback for a safer world</Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header-menu-margin">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/forum">Forum</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
