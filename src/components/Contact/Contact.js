import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt, faMapMarkerAlt, faPaperclip, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';

const Contact = () => {
    const linkStyle = {
        textDecoration: "none",
    };
    return (
        <div className="contact">
            <div className="title-text" data-text="export Abd.contact();">
                export&nbsp;<Link to="/">Abd</Link>.contact();
            </div>

            <div>
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <Link
                    className="title-text"
                    style={linkStyle}
                    to="//www.github.com/Abdify"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </Link>
            </div>
            <div>
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                <Link
                    className="title-text"
                    style={linkStyle}
                    to="//www.linkedin.com/in/abd08/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Linkedin
                </Link>
            </div>
            <div>
                <FontAwesomeIcon icon={faPaperclip} size="lg" />
                <Link
                    className="title-text"
                    style={linkStyle}
                    to="//drive.google.com/file/d/1n0X-FHimn3wV1BUhHsyV0-26v51EeRJq/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </Link>
            </div>

            <div className="">
                <FontAwesomeIcon icon={faAt} size="lg" />
                <div className="title-text">abdullah.fahimm08@gmail.com</div>
            </div>
            <div className="">
                <FontAwesomeIcon icon={faPhone} size="lg" />
                <div className="title-text">+8801926622255</div>
                &nbsp;
            </div>
            <div className="">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                <div className="title-text">Tongi, Gazipur, Bangladesh</div>
            </div>
        </div>
    );
};

export default Contact;
