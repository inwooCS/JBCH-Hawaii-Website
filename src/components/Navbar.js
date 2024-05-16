import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Image } from 'react-bootstrap';

import jbchusalogo from '../images/jbchusa-logo.png';

// Custom hook to manage dropdown state
function useDropdownState(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState);

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  return { isOpen, openDropdown, closeDropdown };
}

// Dropdown component
function Dropdown({ title, items }) {
  const { isOpen, openDropdown, closeDropdown } = useDropdownState(false);
  const dropDirection = title === "Our Mission" ? "end" : "start"; // Conditionally set drop direction

  return (
    <NavDropdown
      title={title}
      id="basic-nav-dropdown"
      show={isOpen}
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
      align={dropDirection} // Set drop direction based on title
    >
      {items.map((item, index) => (
        <NavDropdown.Item key={index} href={item.url}>
          {item.title}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
}

// Navbar component
function NavBar() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Image src={jbchusalogo} alt="Honolulu" fluid style={{ width: '50%', height: 'auto' }} />
            </Nav>
            <Nav className="ms-auto" style={{ fontSize: '20px' }}>
              <Nav.Link href="/">Home</Nav.Link>
              <Dropdown
                title="About Us"
                items={[
                  { title: 'Staff And Leadership', url: '/churchschool' },
                  { title: 'What We Believe', url: 'https://youtube.com' },
                  { title: 'What Is Christianity?', url: '#action/3' },
                  { title: "Contact Us", url: '#action/4' }
                ]}
              />              
              <Nav.Link href="/newtochurch">New&nbsp;To&nbsp;Church?</Nav.Link>
              <Nav.Link href="/churchlife">Church&nbsp;Life</Nav.Link>
              <Dropdown
                title="Ministries"
                items={[
                  { title: 'Church School', url: '/churchschool' },
                  { title: 'Youth Group', url: 'https://youtube.com' },
                  { title: 'Young Adult Group', url: '#action/3' },
                  { title: "Mother's Group", url: '#action/4' },
                  { title: "Father's Group", url: '#action/5' }
                ]}
              />
              <Dropdown 
                title="Our Mission" 
                items={[
                  { title: 'USA Conference', url: 'https://jbchusa.org/home' },
                  { title: 'Life World Mission', url: 'https://www.jbch.org/kor/index.php'}
                ]} 
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;