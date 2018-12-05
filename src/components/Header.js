import React from 'react'
import { Link } from 'react-router-dom'
import {
    Nav , Navbar, NavItem
} from 'react-bootstrap'
const Header = () => (
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">Abraham Ragab</Link>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      <Link to="/resume">Resume</Link>
    </NavItem>
    <NavItem eventKey={2} href="#">
      <Link to="/fendprojects">FEND Projects</Link>
    </NavItem>
  </Nav>
</Navbar>
);

export default Header