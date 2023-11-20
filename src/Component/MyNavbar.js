import React from 'react'
import {Navbar, Container, Nav}from 'react-bootstrap'
import { SiYourtraveldottv } from "react-icons/si";

function MyNavbar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className='bg-secondary stickey-top'>
      <Container>
        <Navbar.Brand href="#home"><span className='text-warning'><SiYourtraveldottv /></span> <span className='fw-bolder text-white'>Dot</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "  />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#popular" className='text-white'>Popular</Nav.Link>
            <Nav.Link href="#offer" className='text-white'>Offers</Nav.Link>
            <Nav.Link href="#hiking" className='text-white'>Hiking</Nav.Link>
            <Nav.Link href="#blog" className='text-white'>Blog</Nav.Link>
            <Nav.Link href="#features" className='text-white'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default MyNavbar
