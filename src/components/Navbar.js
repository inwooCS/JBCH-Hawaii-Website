import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

import { Image } from 'react-bootstrap';
import jbchusalogo from '../images/jbchusa-logo.png';

class NavBar extends React.Component {
  render() {
  return (
    <div> 
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        {/* <Navbar.Brand href="/">Jesus Baptist Hawaii Church</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto"> {/* Center the image */}
            <Image src={jbchusalogo} alt="Honolulu" fluid style={{ width: '50%', height: 'auto' }} />
          </Nav>
          <Nav className="ms-auto" style={{fontSize:"20px"}}> {/* Align NavLinks to the right */}
            <Nav.Link href="/"> Home</Nav.Link>
            <Nav.Link href="/sermon"> Sermon </Nav.Link>
            <Nav.Link href="/fellowship"> Fellowship </Nav.Link>
            <Nav.Link href="/contact"> Contact </Nav.Link>
            <NavDropdown title="Our Mission" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">USA Conference</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Life World Mission</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
  }
}

export default NavBar;