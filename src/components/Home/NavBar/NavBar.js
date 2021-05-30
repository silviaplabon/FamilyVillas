import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div className='container p-2'>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <div className='navbarBrands'>
                            <h3>AmarApartment</h3>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle style={{background:'#ffffff9e'}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto navbar-items">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/agents'>Agents</Nav.Link>
                            <Nav.Link as={Link} to='/apartment'>Apartment</Nav.Link>
                            <Nav.Link className='logInBtn' as={Link} to='/login'><span>logIn</span></Nav.Link>
                            <Nav.Link className='signUpBtn' as={Link} to='/signUp'><span style={{color:'white'}} >Sign Up</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;