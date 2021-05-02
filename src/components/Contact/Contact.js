import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt, faMapMarkerAlt, faPaperclip, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const linkStyle = {
        textDecoration: "none",
    };
    return (
        <div>
            <div className="big-text">
                <Link to="/">Abd</Link>.contact();
            </div>

            <div className="contact-icons">
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <Link
                    className="normal-text"
                    style={linkStyle}
                    to="//www.github.com/Abdify"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </Link>
                <FontAwesomeIcon icon={faLinkedinIn} />
                <Link
                    className="normal-text"
                    style={linkStyle}
                    to="//www.linkedin.com/in/abd08/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin
                </Link>
                <FontAwesomeIcon icon={faPaperclip} />
                <Link
                    className="normal-text"
                    style={linkStyle}
                    to="//drive.google.com/file/d/1n0X-FHimn3wV1BUhHsyV0-26v51EeRJq/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </Link>
            </div>
            <div className="contact-icons">
                <FontAwesomeIcon icon={faAt} />
                <div className="normal-text">abdullah.fahimm08@gmail.com</div>
            </div>
            <div className="contact-icons">
                <FontAwesomeIcon icon={faPhone} />
                <div className="normal-text">+8801926622255</div>
                &nbsp;
            </div>
            <div className="contact-icons">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div className="normal-text">Tongi, Gazipur, Bangladesh</div>
            </div>
        </div>
    );
};

export default Contact;