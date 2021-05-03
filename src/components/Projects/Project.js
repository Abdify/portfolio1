import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAddressCard, faClock, faGlobe } from "@fortawesome/free-solid-svg-icons";
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
                    <Zoom delay={500}>
                        <p className="title-text" data-text={project.name}>
                            {project.name}
                        </p>
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
                                    <Fade bottom delay={(Math.floor(Math.random() * 20) + 1) * 100}>
                                        <li className="list-item">{feature}</li>
                                    </Fade>
                                ))}
                            </div>
                            <p className="normal-text">Technologies</p>
                            <div>
                                {project.technologies.map((tech) => (
                                    <Fade top delay={(Math.floor(Math.random() * 10) + 1) * 100}>
                                        <li className="list-item-small">{tech}</li>
                                    </Fade>
                                ))}
                            </div>
                            <div className="project-link">
                                <div>
                                    <FontAwesomeIcon icon={faGlobe} />{" "}
                                    <a href={project.site}>Live View</a>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faGithub} />
                                    <a href={project.github}>Github</a>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Project;