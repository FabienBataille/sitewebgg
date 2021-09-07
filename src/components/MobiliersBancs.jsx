import React from "react";
import "./mobiliersBancs.css";
import Bancs from "./Bancs";
import { Link } from "react-router-dom";

function MobiliersBancs() {
  return (
    <div className="MobiliersBancs">
      <h1 className="mobiliers-urbains">MOBILIERS URBAINS</h1>
      <hr className="separation-title" />
      <p className="presentationMobiliersBancs">
        Vous trouverez ici quelques exemples d’aménagement urbain pour votre
        collectivité ou votre entreprise. Nous réalisons : des escaliers, des
        bancs, des murets ou encore des fontaines. Nous sommes à votre écoute
        pour vous aider à décorer votre commune ou les abords de votre société.
        Nos granits sont tous sélectionnés pour vous garantir un mobilier
        résistant dans le temps. Nous vous accompagnons dans vos choix pour que
        vos projets soient à votre image. Disposant de nos propres outils de
        production, nous pouvons réaliser des pièces uniques ou en séries afin
        de répondre à vos attentes.
      </p>

      <div className="menu">
        <Link
          className="liens-bancs"
          style={{ textDecoration: "none" }}
          to="/mobiliers-murets"
        >
          <h1 className="rubrique">Murets</h1>
        </Link>
        <Link
          className="liens-bancs"
          style={{ textDecoration: "none" }}
          to="mobiliers-bancs"
        >
          <h1 className="rubrique" id="rubrique-bancs">
            Bancs
          </h1>
        </Link>
        <Link
          className="liens-bancs"
          style={{ textDecoration: "none" }}
          to="mobiliers-fontaines"
        >
          <h1 className="rubrique">Fontaines</h1>
        </Link>
      </div>
      <hr className="separation-menu" />
      <Bancs />
    </div>
  );
}

export default MobiliersBancs;
