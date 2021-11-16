import React from 'react'

import './APropos.css'

function APropos() {
    return (
        <div className="APropos">
                <h1>À Propos</h1>
                <div className="verticalBar1"></div>
                <div className="apropos_content">
                    <div className="apropos_info">
                        <ul>
                            <li>24ans</li>
                            <li>Nantes</li>
                            <li>Permis B</li>
                            <li>Intérêts:
                                <li className="interets">Musique</li>
                                <li className="interets">Voyage</li>
                                <li className="interets">Technologie</li>
                            </li>
                        </ul>
                    </div>
                    <div className="apropos-txt">
                        <p >Après avoir travaillé dans le domaine de la restauration, je souhaite désormais construire mon projet professionnel dans le domaine de l’informatique et plus précisément celui du développement web.<br></br><br></br>
                        Suite à une formation de Développeur web et web mobile au sein de la Wild Code School, d'une durée de 5 mois, je décide donc de poursuivre avec cette organisme et d’y intégrer une formation en alternance d’une année débutant le mois de mars 2022. Cela me permettra de me perfectionner encore plus dans le développement web et d’obtenir un titre professionnel de concepteur développeur d’applications.<br></br><br></br>
                        Grâce notamment à mon expérience passée au sein de la restauration, j’ai pu développer un grand nombre d’aptitudes relationnelles, organisationnelles, d’écoute et d’adaptabilité.</p>
                    </div>
                </div>
            
        </div>
    )
}

export default APropos
