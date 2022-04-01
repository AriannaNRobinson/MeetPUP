import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className='nav-link' id='signup-link'>Log In</NavLink>
                <NavLink to="/signup" className='nav-link' id='signup-link'>Sign Up</NavLink>
            </>
        );
    }

    return (
        <ul>
            <li>
                <NavLink exact to="/" className='nav-link' id='home-link'>Home</NavLink>
                {isLoaded && sessionLinks}
            </li>
        </ul>
    );
}

export default Navigation;
