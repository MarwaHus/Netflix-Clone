import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavBar.css"
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand  href="/" style={{fontSize:"30px",color:"rgb(229,9,20)",fontFamily:"sans-serif"}}>NETFLIX</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" style={{mouseover:"mouseover()"}}>Home</Nav.Link>
          <Nav.Link href="/favList">Favourite Movies</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar