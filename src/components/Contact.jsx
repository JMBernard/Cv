import React from 'react';

import phoneIcon from '../assets/phoneIcon.png';
import mailIcon from '../assets/mailIcon.png';

import './Contact.css'

function Contact() {
    return (
        <div className="Contact">
            <div className="verticalBar5"></div>
            <div className="contact_content">
                
                <div className="contact_info">
                    <div className="contact_title">
                        <h1>Contactez-moi</h1>
                        <p>Je recherche un poste en alternance de :<br/> <li>Developpeur full-stack</li><li> Développeur front-end</li></p>
                    </div>
                    <div className="contact_cards">
                        <div className="contact_card"><img src={phoneIcon} alt="phoneIcon" className="contact_icons"/><p className="contact_details">07.69.59.21.21</p></div>
                        <div className="contact_card"><img src={mailIcon} alt="mailIcon" className="contact_icons"/><p className="contact_details">jm11bernard@gmail.com</p></div>
                        <div className="contact_card"><p className="text_info">Je suis disponible pour une rencontre sur Nantes et ses alentours</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
