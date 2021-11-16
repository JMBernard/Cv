import React from 'react';
import headbackground from '../assets/headbackground.jpg'
import profilImg from '../assets/profil.JPG'

import "./Presentation.css"

function Presentation() {
    return (
        <div className="Presentation">
            <img src={headbackground} alt="headBG" className="headBG"/>
            <div className="presentation_content">
                <img src={profilImg} alt='profilImg' className="profil_img"/>
                <div className="presentation_txt">
                    <div className="intro_txt">
                        <p>Bienvenue sur le cv en ligne de</p>
                    </div>
                    <div className="presentation_title">
                        <p>Jean-Marie BERNARD - Développeur Web Junior</p>
                    </div>
                    
                    <div className="description">
                        <p>En recherche d'un contrat en alternance à Nantes.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Presentation
