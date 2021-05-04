import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from "react-reveal/Flip";
import LightSpeed from "react-reveal/LightSpeed";
import { Link } from 'react-router-dom';
import myImg from '../../../images/image001.png';
import vid from '../../../videos/1.mp4';
import './Header.css';
const name = "${name}";
const titles = [
    <span>
        <Fade bottom>
            <div className="video-container">
                <video playsinline autoPlay muted loop={true} preload="auto" src={vid}></video>
                <div className="overlay"></div>
            </div>
            <Flip bottom duration={1500}>
                <img src={myImg} alt="" />
            </Flip>
        </Fade>
        <Flip delay={1500}>
            <span className="big-text">Hi, I am {name};</span>
        </Flip>
    </span>,
    // <span>Abd.who() = Web Developer;</span>,
    // <span>Abd.from() = Bangladesh;</span>,
    <span className="property-container big-text">
        const Abd = {"{"} <br />
        <Fade left duration={1000}>
            <span className="properties big-text">Name: {name},</span>
        </Fade>
        <Fade right duration={1000}>
            <span className="properties big-text">What: Web Developer,</span>
        </Fade>
        <LightSpeed right delay={500} duration={1000}>
            <span className="properties big-text">From: Bangladesh</span>
        </LightSpeed>
        <Fade bottom>
            <Link to="/projects" className="properties big-text">
                Projects();
            </Link>
            <Link to="/resume" className="properties big-text">
                Resume();
            </Link>
            <Link to="/blog" className="properties big-text">
                Blog();
            </Link>
            <Link to="/contact" className="properties big-text">
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
            <div className="">
                {titles[n]}
            </div>
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