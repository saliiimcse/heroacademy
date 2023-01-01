import React, { useContext, useState } from 'react';
import {  NavLink, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaBookOpen } from 'react-icons/fa';
import { AuthContext } from '../Context/UserContext';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';





const Header = () => {
    const {logOut, user} = useContext(AuthContext)
    const [theme, setThem] = useState(true);
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
        <Navbar bg={theme ? 'dark' : 'success'} variant="dark">
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
                <button className='mx-4' onClick={()=>setThem(!theme)}>{theme ? 'Green' : 'Dark'}</button>
                {
                    <Tooltip
                    title={user?.displayName}
                    position="bottom"
                    trigger="hover"
                    >
                    {user?.photoURL ? <img style={{width: '30px', height: '30px'}} src={user?.photoURL} alt="..." className="img-thumbnail"/> : <img style={{width: '30px', height: '30px'}} src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="..." className="img-thumbnail"/>}
                    </Tooltip>
                }
            </Container>
        </Navbar>
        </>
    );
};

export default Header;