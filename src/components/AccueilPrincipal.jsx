import React from 'react'
import './accueilPrincipal.css'
import gg from "../logos/logo_essai.png";


function AccueilPrincipal() {
    return (
        <div className="AccueilPrincipal">
           <div className="header-accueil-principal">
               <img src={gg} alt="" className="logo-header-accueil-principal"/>
           </div>
           <div className="rubriques-accueil-principal">
               <h1 className="rubrique-voirie">VOIRIE</h1>
               <h1 className="rubrique-funeraire">FUNÉRAIRE</h1>
           </div>
        </div>
    )
}

export default AccueilPrincipal
