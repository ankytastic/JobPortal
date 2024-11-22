import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    // This useEffect hook will run when the component mounts and listens to the changes in localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('username');
        if (storedUser) {
            setIsLoggedIn(true);
            setUsername(storedUser);
        } else {
            setIsLoggedIn(false);
            setUsername('');
        }
    }, []); // This empty dependency array ensures it runs only once when the component mounts

    // Function to handle logout
    const handleLogout = () => {
        localStorage.removeItem('username');
        setIsLoggedIn(false);
        setUsername('');
        navigate('/login'); // Navigate back to the login page after logout
    };

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <FontAwesomeIcon icon={faBriefcase} /> JobMatchPro
                </Link>
            </div>


            <div className="header-right">
                {!isLoggedIn ? (
                    <>
                        <Link to="/login">
                            <button className="header-button">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="header-button">Register</button>
                        </Link>
                    </>
                ) : (
                    <>
                    
                        {/* Only show the logout button when logged in */}
                        <button className="header-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;
