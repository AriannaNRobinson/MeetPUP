import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
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
            <div class='login-signup'>
                <LoginFormModal />
                <SignupFormModal />
            </div>
        );
    }

    return (
        <>
            <div id='navbar'>
                <NavLink exact to="/" id='home-container'>
                    <i className="fa-solid fa-house"></i>
                </NavLink>
                <h1 className='fa-solid'>Meet... PUP!</h1>
                {isLoaded && sessionLinks}
            </div>
        </>
    );
}

export default Navigation;
