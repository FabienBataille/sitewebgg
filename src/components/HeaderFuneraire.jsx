import React from "react";
import "./headerFuneraire.css";
import logo_monumentalistes1 from "../photos-header-funeraire/logo_monumentalistes1.png";
import homeIcon_funeraire from "../images/Home_icon.png";
import monument_config from "../photos-header-funeraire/monument-config.png";
import mailIcon_funeraire from "../images/NousContacter.png";

function HeaderFuneraire() {
  return (
    <div className="HeaderFuneraire">
      <div className="menu-entier">
        <img
          src={logo_monumentalistes1}
          alt=""
          className="logo_monumentaliste"
        />
        <ul className="menu-gauche">
          <li className="tagIcon">
            <img src={homeIcon_funeraire} className="homeIcon_funeraire" alt="homeIcon" />
          </li>
          <li>QUI SOMMES-NOUS?</li>
          <li>NOS MÉTIERS</li>
          <li>CATALOGUE</li>
          <li>NOS RÉALISTIONS</li>
          <li>MATÉRIAUX</li>
          <li className="mailIcon">
            <img src={mailIcon_funeraire} className="mailIcon_funeraire" alt="mailIcon" />
          </li>
        </ul>
      </div>
      <div className="configurateur">
        <img src={monument_config} alt="" className="monument_config" />
        <h3 className="text-configurateur">CONFIGURATEUR</h3>
      </div>
    </div>
  );
}

export default HeaderFuneraire;
