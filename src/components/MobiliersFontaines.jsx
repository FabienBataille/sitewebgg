import React from 'react'
import './mobiliersFontaines.css'
import Fontaines from './Fontaines'
import {Link} from 'react-router-dom'
function MobiliersFontaines() {
    return (
        <div className="MobiliersFontaines">
            <p className="presentationMobiliersFontaines">
            Vous trouverez ici quelques exemples d’aménagement urbain pour votre collectivité ou votre entreprise.
            Nous réalisons : des escaliers, des bancs, des murets ou encore des fontaines.
            Nous sommes à votre écoute pour vous aider à décorer votre commune ou les abords de votre société.
            Nos granits sont tous sélectionnés pour vous garantir un mobilier résistant dans le temps.
            Nous vous accompagnons dans vos choix pour que vos projets soient à votre image.
            Disposant de nos propres outils de production, nous pouvons réaliser des pièces uniques ou en séries afin de répondre à vos attentes.
            </p>
            <Fontaines />
            <div className="menu">
                <Link to="/mobiliers-bancs">
                    <h1>Bancs</h1>
                </Link>
                <Link to="mobiliers-murets">
                    <h1>Murets</h1>
                </Link>
                <Link to="mobiliers-fontaines">
                    <h1>Fontaines</h1>
                </Link>
            </div>
        </div>
    )
}

export default MobiliersFontaines
