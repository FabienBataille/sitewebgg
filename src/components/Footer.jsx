import React from 'react'
import logo_gg from '../images/logo_gg.png'
import m from '../images/m.png'
import produit_bretagne from '../images/produit_bretagne.jpg'
import indication from '../images/indication.png'
import "./footer.css"
import separation from '../images/separation.png'

function Footer() {
    return (
        <div className="Footer">
            <img src={logo_gg} className="logo_gg" alt="logo_gg"/>
            <img src={separation} className="separation1" alt="separation"/>
            <div className="société">
                <h1>LA GÉNÉRALE DU GRANIT</h1>
                <div className="adresse">
                    <p>Rue des Déportés</p> 
                    <p>35420 LOUVIGNÉ-DU-DÉSERT</p>
                    <p>Tél. : +33 (0)2 99 98 02 18</p>
                    <p>Fax. : +33 (0)2 99 98 54 90</p>
                    <p>contact@generale-granit.com</p>
                </div>
            </div>
            <img src={separation} className="separation2" alt="separation"/>
            <div className="partenaires">
                <img src={m} className="m" alt="m"/>
                <img src={produit_bretagne} className="produit_bretagne" alt="produit_bretagne"/>
                <img src={indication} className="indication" alt="indication"/>
            </div>
            <img src={separation} className="separation3" alt="separation"/>
            <div className="mention">
                <p>PLAN DU SITE</p>
                <p>MENTIONS LÉGALES</p>
                <p>© 2021 - La Générale du Granit - Touus droits réservés</p>
            </div>
        </div>
    )
}

export default Footer
