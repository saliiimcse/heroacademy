import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBookOpen } from 'react-icons/fa';


const Header = () => {
    const navLInkStyle = ({isActive}) =>{
        return {
            color: isActive ? 'red' : 'white'
        }
    }
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container className=''>
                <Navbar.Brand ><FaBookOpen></FaBookOpen> Hero Academe</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="me-2" style={navLInkStyle} to='/'>Home</NavLink>
                    <NavLink className="me-2" style={navLInkStyle} to='/course'>Course</NavLink>
                    <NavLink className="me-2" style={navLInkStyle} to='/blog'>Blog</NavLink>
                    <NavLink className="me-2" style={navLInkStyle} to='/login'>Login</NavLink>
                </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;