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
            <div className="project">
                <div className="img-container" onClick={() => setImgClicked(!imgClicked)}>
                    <Fade left duration={1000}>
                        <img
                            src={project.img}
                            alt=""
                            className={imgClicked ? "full-img" : "normal-img"}
                        />
                    </Fade>
                </div>
                <div className="project-description">
                    <Zoom delay={1000}>
                        <p className="title-text">{project.name}</p>
                    </Zoom>
                    <p>
                        <FontAwesomeIcon icon={faClock} /> {project.time}
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faAddressCard} /> {project.description}
                    </p>
                    <Fade right collapse>
                        <div className="project-features">
                            <p className="normal-text">Features</p>
                            <div>
                                {project.features.map((feature) => (
                                    <li className="list-item">{feature}</li>
                                ))}
                            </div>
                                <p className="normal-text">Technologies</p>
                            <div>
                                {project.technologies.map((tech) => (
                                    <li className="list-item-small">{tech}</li>
                                ))}
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Project;