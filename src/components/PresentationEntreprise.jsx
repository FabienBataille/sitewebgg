import React from "react";
import presentation_entreprise1 from "../photosPresentationEntreprise/presentation_entreprise1.jpeg";
import "./presentationEntreprise.css";

function PresentationEntreprise() {
  return (
    <div className="PresentationEntreprise">
      <h1 className="sculpteur">L'ENTREPRISE</h1>
      <hr className="separation-titre-sculpteur" />
      <img
        src={presentation_entreprise1}
        alt=""
        className="presentation_entreprise1"
      />
      <div className="div1">
        <p className="partie1">
          Depuis les années 1980, La Générale du Granit propose de concrétiser
          vos envies d'aménagements publics ou privés. Elle offre des services
          de qualité grâce à son savoir-faire français, et des produits bretons
          certifiés grâce à des outils de production performants et à la
          maîtrise de ses équipes. Elle façonne sur mesure tous vos projets de
          voirie, de bâtiment ou encore de sculptures. La Générale du Granit
          assure la concrétisation de vos projets avec pour engagements
          essentiels :
        </p>
        <ul className="liste">
          <li>Un juste rapport qualité/prix.</li>
          <li>Une qualité constante et de haut niveau.</li>
          <li>Une expertise français</li>
          <li>Un granit breton d'excellence.</li>
        </ul>
        <p className="partie2">
          Nos clients nous font confiance, car nous leur proposons des solutions
          et les produits les plus adaptés à leurs orientations. Nous aspirons à
          vous garantir un service toujours plus efficace.
        </p>
      </div>
      <div className="div2">
        <h5 className="français">LA FABRICATION CERTIFIÉE 100% FRANÇAISE :</h5>
        <p className="en_choisissant">
          En choisissant les produits de voirie La Générale du Granit, vous
          contribuez au respect d'accords essentiels :
        </p>
        <ul className="liste2">
          <li>La garantie d'une fabrication entièrement Française.</li>
          <li>La sauvegarde d'un savoir-faire artisanal.</li>
          <li>Le respect des traditions locales.</li>
          <li>Le respect des engagements économiques et sociaux.</li>
          <li>Le respect des bonnes pratiques de gestion environnementale.</li>
        </ul>
        <p className="tous_leurs">
          Tous leurs produits répondent aux normes européennes et sont tous
          certifiés par le marquage CE. L'IGP (Indication Géographique Protégée)
          sera également apposée, afin de vous garantir la provenance de leurs
          granits.
        </p>
        <p className="notre_societe">Notre société en quelques chiffres :</p>
        <ul className="quelques_points">
          <li>130 personnes.</li>
          <li>25 000 m2 d’ateliers couverts.</li>
          <li>10 000 m2 couverts d’aires de stockage.</li>
          <li>300 machines-outils.</li>
          <li>14 grands disques.</li>
          <li>4 châssis.</li>
          <li>300 000 m2 de sciage par an.</li>
          <li>8 000 M3 de granit travaillé.</li>
          <li>12 M€ de chiffre d’affaires.</li>
        </ul>
      </div>
    </div>
  );
}

export default PresentationEntreprise;
