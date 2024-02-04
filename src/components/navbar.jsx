
import React from 'react'
import {  Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../App.css'
function Navbarcomponent() {
 

  return (
        <div>
             <Navbar expand="lg" fixed='top' className="bg-body-tertiary">
        <Container>
        <Link to="/"><Navbar.Brand>
           WeCare
          </Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="links">
            
             <Nav.Link><Link to="/book">BookService</Link></Nav.Link>
            
             <Nav.Link> <Link to="/viewallbooking">ViewBookings</Link></Nav.Link>
            
            

              

            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>


        </div>
  )
}

export default Navbarcomponent;
