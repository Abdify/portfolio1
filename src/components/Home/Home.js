// import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header/Header';
import './Home.css';

const Home = () => {
    const linkStyle = {
        textDecoration: "none"
    }
    return (
        <div>
            <Header />
            <div className="contact-icons">
                {/* <FontAwesomeIcon icon={faGithub} size="lg" /> */}
                <Link
                    className="normal-text"
                    style={linkStyle}
                    to="//github.com/Abdify"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </Link>
                {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
                <Link className="normal-text" style={linkStyle} to="/">
                    Linkedin
                </Link>
            </div>
        </div>
    );
};

export default Home;