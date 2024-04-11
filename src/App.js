import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Alert, Breadcrumb, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import honoluluImage from './images/honolulu.jpeg';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" variant="dark" style={{ position: 'absolute', top: 0, left: 5, right: 0 }}>
      <Navbar.Brand href="#home">
        <Icon.Backpack />
        JBCH Hawaii
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <NavDropdown title="Location" id="basic-nav-dropdown">
            <NavDropdown.Item href="#location-1">Location 1</NavDropdown.Item>
            <NavDropdown.Item href="#location-2">Location 2</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#plan-a-visit">Plan a Visit</Nav.Link>
          <Nav.Link href="#give">Give</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#menu">Menu</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Image src={honoluluImage} alt="Honolulu" fluid style={{ width: '100%', height: 'auto' }} />
      <NavBar/>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
