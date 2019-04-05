import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class Header extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#home">RANDY MENESES</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="mr-auto">
                  <Nav.Link href="#aboutMe">About Me</Nav.Link>
                  <Nav.Link href="#Projects">Projects</Nav.Link>
              </Nav>
              <Nav  >
                  <Nav.Link href="#Contact-Me">Contact Me</Nav.Link>
                  <Nav.Link href="#Resume">Resume</Nav.Link> 
              </Nav>
          </Navbar.Collapse>
        </Navbar>

    );
  }
}

export default Header;
