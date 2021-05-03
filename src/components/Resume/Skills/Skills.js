import React from 'react';
import Jello from "react-reveal/Jello";
import { Link } from 'react-router-dom';
import './Skills.css';

const Skills = () => {
    const skills = {
            expertise: [
                "React",
                "Routing",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Python",
                "Git",
            ],
            comfortable: [
                "Redux",
                "MongoDB",
                "NodeJs",
                "ExpressJs",
                "Material UI",
                "Firebase",
                "Netlify",
                "Heroku",
            ],
            familiar: [
                "TypeScript",
                "SASS",
                "React Native",
            ]
        }
    return (
        <div style={{ margin: "1rem 0" }}>
            <div className="title-text" data-text="export Abd.resume();">
                export <Link to="/">Abd</Link>.resume();
            </div>
            <div className="skills">
                <div>
                    <h1 className="mid-text">Abd.skills.expertise();</h1>
                    {skills.expertise.map((skill) => {
                        return (
                            <Jello duration={(Math.floor(Math.random() * 3) + 1) * 1000}>
                                <li className="list-item">{skill}</li>
                            </Jello>
                        );
                    })}
                </div>
                <div>
                    <h1 className="mid-text">Abd.skills.comfortable();</h1>
                    {skills.comfortable.map((skill) => {
                        return (
                            <Jello duration={(Math.floor(Math.random() * 3) + 1) * 1000}>
                                <li className="list-item">{skill}</li>
                            </Jello>
                        );
                    })}
                </div>
                <div>
                    <h1 className="mid-text">Abd.skills.familiar();</h1>
                    {skills.familiar.map((skill) => {
                        return (
                            <Jello duration={(Math.floor(Math.random() * 3) + 1) * 1000}>
                                <li className="list-item">{skill}</li>
                            </Jello>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;