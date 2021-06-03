import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './NavBar.css';
import firebase from "firebase/app";
import "firebase/auth";
import { emptyOrderList } from '../../../redux/actions/apartmentAction';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const signOut = () => {
        firebase.auth().signOut().then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                photo: '',
                email: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
            
            
        }).catch(err => {
            console.log(err);
            console.log(err.message)
        })
    };
    return (
        <div className='navbar-container'>
            <div className='container p-2'>
                <Navbar expand="lg">
                    <Navbar.Brand>
                        <div className='navbarBrands'>
                            <h3>Ample Apartment</h3>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle style={{background:'#ffffff9e'}} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto navbar-items">
                            <Nav.Link as={Link} to='/home'  className="text-white">Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'  className="text-white">About</Nav.Link>
                            <Nav.Link as={Link} to='/agents'  className="text-white">Agents</Nav.Link>
                            <Nav.Link as={Link} to='/apartment'  className="text-white">Apartment</Nav.Link>
                            <Nav.Link as={Link} to='/cart' className="text-white" >Cart</Nav.Link>
                            {
                                loggedInUser.email?
                                <Nav.Link className='logInBtn' as={Link} to='' onClick={signOut}><span>LogOut</span></Nav.Link>
                                :
                                <Nav.Link className='logInBtn' as={Link} to='/login'><span>logIn</span></Nav.Link>

                            }
                            
                            <Nav.Link className='signUpBtn' as={Link} to='/signUp'><span style={{color:'white'}} >Sign Up</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavBar;