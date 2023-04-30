import React from 'react';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto pt-4 flex items-center justify-between text-white'>
            <div>
                <img className='w-28' src={logo} alt="Logo" />
            </div>
            <div className='flex gap-12 items-center justify-between'>
                <input className='bg-transparent border rounded-md px-2 py-1 w-60 font-semibold' type="search" name="" id="" placeholder='Search your Destination...' />
                <NavLink to="/news">News</NavLink>
                <NavLink to="/destination">Destination</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/login"><button className='bg-yellow-500 px-4 py-1 rounded-md font-semibold tracking-wider'>Login</button></NavLink>
            </div>
        </div>
    );
};

export default Header;