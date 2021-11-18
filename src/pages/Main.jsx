import React from 'react'

import Presentation from '../components/Presentation';
import APropos from '../components/APropos';
import Competences from '../components/Competences';
import Experiences from '../components/Experiences';

import './Main.css'

function Main() {
    return (
        <div>
            <Presentation />
            <APropos />
            <Competences />
            <Experiences />
        </div>
    )
}

export default Main
