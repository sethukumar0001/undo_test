import React, { Component } from 'react';
//import  UndoguysHeader from './unguysheader';
//import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthHelperMethods from '../Authentication/AuthHelperMethods';
import withAuth from '../Authentication/withAuth';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'



class Header extends Component {
Auth = new AuthHelperMethods();
_handleLogout = () => {
  this.Auth.logout();
  this.into.history.replace('/login');
}

    render() {
      return (
        <div className="undoguysheader" >
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Sethu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/mygigs">Home</Nav.Link>
        <NavDropdown title="Settings" id="basic-nav-dropdown">
        <NavDropdown.Item href="/profileone">Profile</NavDropdown.Item>
        <NavDropdown.Item onClick={this._handleLogout.bind(this)}>Sign Out</NavDropdown.Item>
        {/* <button type="button" className="btn btn-info" onClick={this._handleLogout.bind(this)}>Logout</button> */}
        
     
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
      );
    }
}
export default withAuth(Header)