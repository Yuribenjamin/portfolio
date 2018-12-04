import React from 'react'
import {
    Nav , Navbar, NavItem, NavDropdown, MenuItem
} from 'react-bootstrap'
const Header = () => (
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Abraham Ragab</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Resume
    </NavItem>
    <NavItem eventKey={2} href="#">
      FEND Projects
    </NavItem>
    <NavDropdown eventKey={3} title="Contact Me" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Facebook</MenuItem>
      <MenuItem eventKey={3.2}>Linkedin</MenuItem>
      <MenuItem eventKey={3.3}>Twitter</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Github</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>
);

export default Header