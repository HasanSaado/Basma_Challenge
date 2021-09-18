// Libraries
import React from 'react';

// Components
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

// Style
import './Header.scss';

function Header() {

  /**
   *
   */
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse 
          id="basic-navbar-nav" 
          className="justify-content-end"
        >
          <Nav className="ml-auto">
            <NavDropdown 
              title="Home" 
              id="basic-nav-dropdown"
              className="header-link"
            >
              <NavDropdown.Item href="#" className="header-link">#</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="header-link">Feature</Nav.Link>
            <NavDropdown 
              title="Pages" 
              id="basic-nav-dropdown" 
              className="header-link"
            >
              <NavDropdown.Item href="#">#</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="header-link">Screenshot</Nav.Link>
            <Nav.Link href="#" className="header-link">Pricing</Nav.Link>
            <Nav.Link href="#" className="header-link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
