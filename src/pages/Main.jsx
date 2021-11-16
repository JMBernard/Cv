import React from 'react'

import Presentation from '../components/Presentation';
import APropos from '../components/APropos';
import Competences from '../components/Competences';

import './Main.css'

function Main() {
    return (
        <div>
            <Presentation />
            <APropos />
            <Competences />
        </div>
    )
}

export default Main
