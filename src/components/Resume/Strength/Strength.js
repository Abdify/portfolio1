import React from 'react';
import Fade from 'react-reveal/Fade';
import './Strength.css';
const Strength = () => {
    const strengths = [
        {
            title: "Problem Solving",
            description: "Solved 200+ problems on URI online judge",
            link: "https://www.urionlinejudge.com.br/judge/en/profile/452118",
        },
        {
            title: "Article Writing",
            description:
                "One of my articles placed first in the JUSC National Science Article Writing Competition 2020",
            link: "https://drive.google.com/file/d/1wVElxStdsWo5k2-GApjBk2cTysojorDM/view",
        },
    ];
    return (
        <Fade top>
            <div>
                <div className="mid-text">Abd.strength();</div>
                <div className="strengths">
                    {strengths.map((strength) => {
                        return (
                            <div className="strength">
                                <h3 className="normal-text">{strength.title}</h3>
                                <a href={strength.link}>{strength.description}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Fade>
    );
};

export default Strength;