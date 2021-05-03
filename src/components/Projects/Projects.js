import React from 'react';
import { Link } from 'react-router-dom';
import pb from "../../images/pb.png";
import pt from "../../images/pt.png";
import Project from './Project';

const projects = [
    {
        id: 1,
        img: pb,
        name: "Programming Babocched",
        time: "March - April, 2021",
        description:
            "A website for asking and answering programming related questions and problems.",
        features: [
            "Ask questions",
            "Write answers",
            "Search questions",
            "Code playground",
            "Code autocomplete",
            "User dashboard",
            "Update/delete questions/answers",
            "Write reviews",
        ],
        technologies: ["REACT", "EXPRESS JS", "MONGODB", "JWT Token"],
        github: "https://github.com/Abdify/programming-babocched-client",
        site: "https://programmingb.netlify.app/",
    },
    {
        id: 2,
        img: pt,
        name: "Pro Tutors",
        time: "April, 2021",
        description: "A website for students and teachers on online tutoring system.",
        features: [
            "Enroll in course",
            "Dynamic dashboard by authorization",
            "Add/delete course",
            "Update course status",
            "make admin",
        ],
        technologies: ["REACT", "EXPRESS JS", "MONGODB", "STRIPE PAYMENT GATEWAY", "FIREBASE"],
        github: "https://github.com/Abdify/pro-tutors-client",
        site: "https://pro-tutors.netlify.app/",
    },
];

const Projects = () => {
    return (
        <div>
            <div className="title-text" data-text="export Abd.projects();">
                export <Link to="/">Abd</Link>.projects();
            </div>
            <div>
                {projects.map((project) => (
                    
                        <Project project={project} key={project.id} />
                    
                ))}
            </div>
        </div>
    );
};

export default Projects;