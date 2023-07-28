import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activePage, setActivePage] = useState('editProfile');

    const showPage = (pageId) => {
        setActivePage(pageId);
    };

    const logOut = () => {
        // Add code for logging out
        alert('Logged out successfully!');
    };

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a
                        href="#"
                        className={activePage === 'editProfile' ? 'active' : ''}
                        onClick={() => showPage('editProfile')}
                    >
                        Edit Profile
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activePage === 'changePassword' ? 'active' : ''}
                        onClick={() => showPage('changePassword')}
                    >
                        Change Password
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activePage === 'appsWebsites' ? 'active' : ''}
                        onClick={() => showPage('appsWebsites')}
                    >
                        Apps and Websites
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activePage === 'notifications' ? 'active' : ''}
                        onClick={() => showPage('notifications')}
                    >
                        Notifications
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activePage === 'privacySecurity' ? 'active' : ''}
                        onClick={() => showPage('privacySecurity')}
                    >
                        Privacy and Security
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activePage === 'loginActivity' ? 'active' : ''}
                        onClick={() => showPage('loginActivity')}
                    >
                        Login Activity
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activePage === 'emailsInstagram' ? 'active' : ''}
                        onClick={() => showPage('emailsInstagram')}
                    >
                        Emails from Instagram
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className={activePage === 'reportProblem' ? 'active' : ''}
                        onClick={() => showPage('reportProblem')}
                    >
                        Report a Problem
                    </a>
                </li>
                <li>
                    <a href="#" onClick={logOut}>
                        Log Out
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;