import React from 'react';

import node from '../assets/nodeIcon.png';
import CSS3 from '../assets/CSS3Icon.png';
import github from '../assets/githubIcon.png';
import html from '../assets/htmlIcon.png';
import javascript from '../assets/javascriptIcon.png';
import MySQL from '../assets/MySQLIcon.png';
import react from '../assets/reactIcon.png';



import './Competences.css'

function Competences() {
    return (
        <div className="Competences">
            <div className="verticalBar2"></div>
            <div className="competences_content">
                <div className="competences_list">
                    <h1 className="competences_title">Compétences</h1>
                    <div className="rl_list">
                        <ul className="list">
                            <li><img src={react} alt='reactIcon' className="tech_icon"/>React.js</li>
                            <li><img src={javascript} alt='jsIcon' className="tech_icon"/>Javascript</li>
                            <li><img src={html} alt='htmlIcon' className="tech_icon"/>HTML5</li>
                            <li><img src={CSS3} alt='cssIcon' className="tech_icon"/>CSS3</li>
                        </ul>
                    </div>
                    <div className="rl_list">
                        <ul className="list">
                            <li><img src={github} alt='githubIcon' className="tech_icon"/>Github</li>
                            <li><img src={node} alt='nodeIcon' className="tech_icon"/>Node.js</li>
                            <li className="express">Express.js</li>
                            <li><img src={MySQL} alt='MySQLIcon' className="tech_icon"/>MySQL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Competences
