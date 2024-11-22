import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="socials">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

                {/* Add About Us Link */}
                <div className="footer-links">
                    <Link to="/about" className="about-link">About Us</Link> {/* Use react-router Link */}
                </div>

                <div className="copyright">
                    &copy; {new Date().getFullYear()} JobMatchPro. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
