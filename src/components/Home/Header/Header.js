import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myImg from '../../../images/image001.png';
import './Header.css';

const titles = [
    <span>
        <img src={myImg} alt="" />
        Hello, I am <br />
        const Abd;
    </span>,
    // <span>Abd.who() = Web Developer;</span>,
    // <span>Abd.from() = Bangladesh;</span>,
    <span>
        const Abd = {"{"} <br />
        <span className="properties">Name: Abd,</span>
        <span className="properties">What: Web Developer,</span>
        <span className="properties">From: Bangladesh</span>
        <Link to="/projects" className="properties">Projects();</Link>
        <Link to="/resume" className="properties">Resume();</Link>
        <Link to="/blog" className="properties">Blog();</Link>
        <Link to="/contact" className="properties">Contact();</Link>
        {"}"}
    </span>,
];

const Header = () => {
    const [n, setN] = useState(0);
    return (
        <div className="header-container">
            <div className="big-text">{titles[n]}</div>
            {!n >= titles.length - 1 ? (
                <button className="btn" onClick={() => setN(n+1)}>
                    .next()
                </button>
            ) : <button className="btn" onClick={() => setN(n-1)}>.previous()</button>
            }
            
        </div>
    );

    
};

export default Header;