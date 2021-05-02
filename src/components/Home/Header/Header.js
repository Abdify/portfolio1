import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from 'react-router-dom';
import myImg from '../../../images/image001.png';
import './Header.css';

const name = "${name}";
const titles = [
    <span>
        <Fade bottom>
            <img src={myImg} alt="" />
        </Fade>
        <Fade top>
            Hello, I am {name}
        </Fade>
    </span>,
    // <span>Abd.who() = Web Developer;</span>,
    // <span>Abd.from() = Bangladesh;</span>,
    <span className="property-container">
        const Abd = {"{"} <br />
        <Fade left duration={1000}>
            <span className="properties">Name: {name},</span>
        </Fade>
        <Fade right duration={1000}>
            <span className="properties">What: Web Developer,</span>
        </Fade>
        <LightSpeed right delay={500} duration={1000}>
            <span className="properties">From: Bangladesh</span>
        </LightSpeed>
        <Fade bottom>
            <Link to="/projects" className="properties">
                Projects();
            </Link>
            <Link to="/resume" className="properties">
                Resume();
            </Link>
            <Link to="/blog" className="properties">
                Blog();
            </Link>
            <Link to="/contact" className="properties">
                Contact();
            </Link>
        </Fade>
        {"}"}
    </span>,
];

const Header = () => {
    const [n, setN] = useState(0);
    return (
        <div className="header-container">
            <div className="mid-text">const name = Abd;</div>
            <div className="big-text">{titles[n]}</div>
            {n < titles.length - 1 ? (
                <button className="btn" onClick={() => setN(n + 1)}>
                    .next()
                </button>
            ) : (
                <button className="btn" onClick={() => setN(n - 1)}>
                    .previous()
                </button>
            )}
        </div>
    );

    
};

export default Header;