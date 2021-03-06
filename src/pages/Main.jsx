import React from 'react'

import Presentation from '../components/Presentation';
import APropos from '../components/APropos';
import Competences from '../components/Competences';
import Experiences from '../components/Experiences';
import Formation from '../components/Formation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import './Main.css'

function Main() {
    return (
        <div className="Main">
            <Presentation />
            <APropos />
            <Competences />
            <Experiences />
            <Formation />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main
