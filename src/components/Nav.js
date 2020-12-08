import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
function Navigation() {
  return(
   <React.Fragment> 
  <Navbar bg="light" sticky="top">
    <Navbar.Brand className='displayfont' href="/">Quiz Party</Navbar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/signin">Sign In</Nav.Link>
    </ Navbar>
  </ React.Fragment>
  )
}
export default Navigation;