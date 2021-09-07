import React from "react";
import logo_gg from "../images/logo_gg.png";
import m from "../images/m.png";
import produit_bretagne from "../images/produit_bretagne.jpg";
import indication from "../images/indication.png";
import "./footerFuneraire.css";
import separation from "../images/separation.png";

function FooterFuneraire() {
  return (
    <div className="FooterFuneraire">
      <img src={m} className="m_funeraire" alt="m" />
      <img
        src={separation}
        className="separation1_funeraire"
        alt="separation"
      />
      <div className="société_funeraire">
        <h1>LES MONUMENTALISTES</h1>
        <div className="adresse_funeraire">
          <p>Rue des Déportés</p>
          <p>35420 LOUVIGNÉ-DU-DÉSERT</p>
          <p>Tél. : +33 (0)2 99 98 02 18</p>
          <p>Fax. : +33 (0)2 99 98 54 90</p>
          <p>contact@les-monumentalistes.com</p>
        </div>
      </div>
      <img
        src={separation}
        className="separation2_funeraire"
        alt="separation"
      />
      <div className="partenaires_funeraire">
        <img
          src={produit_bretagne}
          className="produit_bretagne_funeraire"
          alt="produit_bretagne"
        />
        <img
          src={indication}
          className="indication_funeraire"
          alt="indication"
        />
      </div>
      <img
        src={separation}
        className="separation3_funeraire"
        alt="separation"
      />
      <div className="une-marque">
        <h1>UNE MARQUE DE :</h1>
        <img src={logo_gg} alt="" className="logo_gg_funeraire" />
      </div>
      <img
        src={separation}
        className="separation4_funeraire"
        alt="separation"
      />
      <div className="mention_funeraire">
        <p>PLAN DU SITE</p>
        <p>MENTIONS LÉGALES</p>
        <p>© 2021 - La Générale du Granit - Touus droits réservés</p>
      </div>
    </div>
  );
}

export default FooterFuneraire;
