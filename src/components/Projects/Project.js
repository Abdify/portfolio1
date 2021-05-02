import { faAddressCard, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import './Project.css';
const Project = ({project}) => {
    const [imgClicked, setImgClicked] = useState(false);
    return (
        <div>
            <Zoom delay={1000}>
                <p className="mid-text">{project.name}</p>
            </Zoom>
            <p>
                <FontAwesomeIcon icon={faClock} /> {project.time}
            </p>
            <p>
                <FontAwesomeIcon icon={faAddressCard} /> {project.description}
            </p>
            <div className="project-features">
                <div className="img-container" onClick={() => setImgClicked(!imgClicked)}>
                    <Fade left duration={1000}>
                        <img
                            src={project.img}
                            alt=""
                            className={imgClicked ? "full-img" : "normal-img"}
                        />
                    </Fade>
                </div>

                <Fade right collapse>
                    <div>
                        <p className="normal-text">Features</p>
                        {project.features.map((feature) => (
                            <li className="list-item">{feature}</li>
                        ))}
                    </div>
                    <div>
                        <p className="normal-text">Technologies</p>
                        {project.technologies.map((tech) => (
                            <li className="list-item">{tech}</li>
                        ))}
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Project;