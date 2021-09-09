import React from 'react'
import {NavLink}from 'react-router-dom'
import {Nav, Navbar,Container} from 'react-bootstrap'


function Navigation() {

return(
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Container>
        <Navbar.Brand as={NavLink} to='/'> Aplication</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link  as={NavLink} to="/Profile">Profile</Nav.Link>
                <Nav.Link as={NavLink} to="/user">User</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link as={NavLink} to="/signin">Signin</Nav.Link>
                <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
)       
}

export default Navigation;

    
   