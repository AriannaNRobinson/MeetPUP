import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <div className='profile-container'>
            <button className='profile-button' onClick={openMenu}>
                <div className='profile-icon'>
                    <i className="fa-solid fa-user" />
                </div>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li className='profile-li'>{user.username}</li>
                    <li className='profile-li'>{user.email}</li>
                    <li className='profile-li'>
                        <button id='logout-button' onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default ProfileButton;
