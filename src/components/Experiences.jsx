import React from 'react'
import Slider from 'react-slick';

import expBg2 from '../assets/expBg2.jpg';

import './Experiences.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Experiences() {

    const settings = {
        slidesToShow:3,
        infinite: true,
        speed: 500,
        centerPadding: '60xp',
        slidesToScroll: 1,
        dots: true,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                width: '',
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "10px",
                border: "2px #78a1bb solid"
              }}
            >
            </div>
          )
      };

    return (
        <div className="Experiences">
            <div className="verticalBar3"></div>
            <div className="experiences_content">
                <img src={expBg2} alt='background_experiences' className="bg_experiences"/>
                <Slider {...settings} className="carousel">
                <div className="cards">
                        <div className="card">
                            <h3>MAISON GRIMAUD - NANTES</h3>
                            <div className="card_content">
                                <p>Serveur, Vendeur</p>
                                <p>Avril 2019 - Juin 2020</p>
                                <div>
                                    <ul className="card_list">
                                        <li>Accueil, comunication, conseil et vente.</li>
                                        <li>Mise en place d'une nouvelle carte</li>
                                        <li>Assurer le service en salle et en terrasse</li>
                                        <li>Encaissement des règlements, prise de réservation.</li>
                                        <li>Gestion des stocks.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h3>CAFÉ DU COMMERCE - NANTES</h3>
                            <div className="card_content">
                                <p>Serveur, Limonadier</p>
                                <p>Février 2019 - Mars 2019</p>
                                <div>
                                    <ul className="card_list">
                                        <li>Accueil, comunication, conseil, vente.</li>
                                        <li>Assurer le service en salle ou en terrasse.</li>
                                        <li>Encaissement des règlements.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h3>HOTEL CENTENNIAL - SYDNEY</h3>
                            <div className="card_content">
                                <p>Chef de Rang</p>
                                <p>Juillet 2018 - Octobre 2018</p>
                                <div>
                                    <ul className="card_list">
                                        <li>Accueil et accompagnement du client.</li>
                                        <li>Assurer le service et veiller à la satisfaction des clients.</li>
                                        <li>Responsable d'un groupe de table.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h3>WILD SAGE - SYDNEY</h3>
                            <div className="card_content">
                                <p>Serveur, Barista</p>
                                <p>Février 2018 - Juillet 2018</p>
                                <div>
                                    <ul className="card_list">
                                        <li>Préparation des boissons le matin, sur place ou à emporter.</li>
                                        <li>Prise de commandes, Service en salle ou en terrasse.</li>
                                        <li>Encaissement des règlements, prise de réservation.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h3>LE CAFÉ DU KIOSQUE - VANNES</h3>
                            <div className="card_content">
                                <p>Barman, Limonadier</p>
                                <p>Avril 2017 - Octobre 2017</p>
                                <div>
                                    <ul className="card_list">
                                        <li>Préparation des boissons et planches apéritifs.</li>
                                        <li>Prise de commande, Service, Encaissements.</li>
                                        <li>Renseigner la clientèle sur les événements et intérêts de la ville.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h3>LA POTINIÈRE - CARNAC</h3>
                            <div className="card_content">
                                <p>Barman, Serveur</p>
                                <p>Juin 2016 - Octobre 2016</p>
                                <div>
                                    <ul className="card_list">
                                        <li>Préparation des boissons et des desserts au bar.</li>
                                        <li>Prise des commandes.</li>
                                        <li>Service en salle et en terrasse.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            
        </div>
    )
}

export default Experiences
