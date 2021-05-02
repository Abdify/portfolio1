import React from 'react';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Strength from './Strength/Strength';

const Resume = () => {
    return (
        <div>
            <Skills />
            <Education />
            <Strength />
        </div>
    );
};

export default Resume;