import { faAddressCard, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import './Project.css';
const Project = ({project}) => {
    const [imgClicked, setImgClicked] = useState(false);
    return (
        <div>
            <p className="mid-text">{project.name}</p>
            <p>
                <FontAwesomeIcon icon={faClock} /> {project.time}
            </p>
            <p>
                <FontAwesomeIcon icon={faAddressCard} /> {project.description}
            </p>
            <div className="project-features">
                <div className="img-container" onClick={() => setImgClicked(!imgClicked)}>
                    <img
                        src={project.img}
                        alt=""
                        className={imgClicked ? "full-img" : "normal-img"}
                    />
                </div>

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
            </div>
        </div>
    );
};

export default Project;