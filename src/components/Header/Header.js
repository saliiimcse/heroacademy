import React, { useContext } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBookOpen } from 'react-icons/fa';
import { AuthContext } from '../Context/UserContext';



const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    const navigate = useNavigate();
    const navLInkStyle = ({isActive}) =>{
        return {
            color: isActive ? 'red' : 'white'
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(()=> {
                navigate('/login')
            })
            .catch(error => console.error(error))
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
                    {
                        user?.uid ?
                            <button onClick={handleLogOut} className="btn btn-light btn-sm">Sign Out</button>
                        :
                        <NavLink className="me-2" style={navLInkStyle} to='/login'>Login</NavLink>
                    }
                </Nav>
                {
                   user?.displayName && <p className='text-white ms-2'>Hello {user?.displayName}</p>

                }
            </Container>
        </Navbar>
        </>
    );
};

export default Header;