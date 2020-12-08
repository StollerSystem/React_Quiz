import React from 'react';
import router from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <React.Fragment>
      <Router>
        <Navbar bg="light" sticky="top">
          <Navbar.Brand className='displayfont' href="/">Quiz Party</Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/signin">Sign In</Nav.Link>
        </ Navbar>
      </Router>
    </ React.Fragment>
  )
}
export default Navigation;