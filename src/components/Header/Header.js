import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const navLInkStyle = ({isActive}) =>{
        return {
            color: isActive ? 'red' : 'black'
        }
    }
    return (
        <nav className='navigation md:flex md:justify-between py-2 bg-red-100'>
            <div className='text-xl font-bold md:pl-10'>
                <h3 className='sm:text-center'>Coding School</h3>
            </div>
            <div className='md:flex space-x-4 md:pr-10 font-semibold'>
                <NavLink style={navLInkStyle} to='/'>Home</NavLink>
                <NavLink style={navLInkStyle} to='/statistic'>Statistics</NavLink>
                <NavLink style={navLInkStyle} to='/blog'>Blog</NavLink>
            </div>
        </nav>
    );
};

export default Header;