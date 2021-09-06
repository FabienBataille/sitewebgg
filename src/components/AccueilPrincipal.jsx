import React from "react";
import "./accueilPrincipal.css";
import gg from "../logos/logo_essai.png";
import { Link } from "react-router-dom";

function AccueilPrincipal() {
  return (
    <div className="AccueilPrincipal">
      <div className="header-accueil-principal">
        <img src={gg} alt="" className="logo-header-accueil-principal" />
      </div>
      <div className="rubriques-accueil-principal">
        <Link to="/accueil" style={{ textDecoration: "none" }}>
          <h1 className="rubrique-voirie">VOIRIE</h1>
        </Link>
        <Link to="accueil-funeraire" style={{ textDecoration: "none" }}>
          <h1 className="rubrique-funeraire">FUNÉRAIRE</h1>
        </Link>
      </div>
    </div>
  );
}

export default AccueilPrincipal;
