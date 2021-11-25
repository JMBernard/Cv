import React from 'react';

import { BsLinkedin, BsPrinter } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import CV from '../files/CV_BERNARD_2021.pdf'

import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="footer_socials">
                <a className="social_icons" href="https://www.linkedin.com/in/jean-marie-bernard/" target="_blank">
                    <BsLinkedin />
                </a>
                <a className="social_icons" href="https://github.com/JMBernard" target="_blank">
                    <FaGithub />
                </a>
                <a className="social_icons" href={CV} target="_blank">
                    <BsPrinter/>
                </a>
            </div>
            <div className="footer_txt">
                <p>Jean-Marie BERNARD © 2021 <br/> Tout droit réservés</p>
            </div>
        </div>
    )
}

export default Footer
