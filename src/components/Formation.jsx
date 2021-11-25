import React from 'react'

import wcs_logo from '../assets/wcs_logo.png';
import SaintAnne_logo from '../assets/SaintAnne_logo.png'

import './Formation.css'

function Formation() {
    return (
        <div className="Formation">
            <div className="verticalBar4"></div>
            <div className="formation_content">
                <div className ="formation_list">
                    <h1 className="formation_title">Formation</h1>
                    <ul className="formation_ul">
                        <li><img src={wcs_logo} alt='wcsLogo' className="formation_logo"/>Formation Développeur web et web mobile - Wild Code School (De juin à novembre 2021)</li>
                        <li><img src={SaintAnne_logo} alt='SaintAnneLogo' className="formation_logo"/>Baccalauréat STMG - option marketing (2015)</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Formation
