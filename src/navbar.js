// navbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="" expand="lg">
      <Navbar.Brand style={{ color: 'white' }} href="#home">Logo</Navbar.Brand>
      <Navbar.Brand style={{ color: 'white' }} href="#home">JBCH Hawaii</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{ color: 'white' }} href="#about-us">About Us</Nav.Link>
          <NavDropdown title="Location" id="basic-nav-dropdown" style={{ color: 'white' }}>
            <NavDropdown.Item href="#location-1" style={{ color: 'white' }}>Location 1</NavDropdown.Item>
            <NavDropdown.Item href="#location-2" style={{ color: 'white' }}>Location 2</NavDropdown.Item>
            {/* Add more locations as needed */}
          </NavDropdown>
          <Nav.Link style={{ color: 'white' }} href="#plan-a-visit">Plan a Visit</Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="#give">Give</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link style={{ color: 'white' }} href="#menu">Menu</Nav.Link>
          {/* You can add more items here if needed */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
