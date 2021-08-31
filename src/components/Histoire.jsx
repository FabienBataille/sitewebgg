import React from "react";
import "./histoire.css";
import histoire2 from "../photo-histoire/histoire2.png";
import histoire1 from "../photo-histoire/histoire1.png";
import histoire3 from "../photo-histoire/histoire3.png";
import histoire4 from "../photo-histoire/histoire4.png";

function Histoire() {
  return (
    <div className="Histoire">
      <h1 className="titre-histoire">UN PEU D'HISTOIRE</h1>
      <hr className="separation-titre-histoire" />
      <img src={histoire2} alt="" className="histoire2" />
      <div className="paragraphe1">
        <p className="p1">
          Les Établissements ROBERT ont été créés le 1er octobre 1957, à
          Saint-Amé dans les Vosges par Maurice ROBERT. Avec ses deux ouvriers,
          ils produisent des monuments funéraires en granit dont la demande est
          forte à cette époque. L’entreprise est l’une des premières
          utilisatrices des outils diamantés, nouveaux dans ce secteur. La
          société grossit rapidement et compte 24 salariés huit ans plus tard.
          10 ans après leur création, Les Établissements ROBERT s’associent à
          l’entreprise Félix BRIGNOLI et s’installent petit à petit en Bretagne,
          à Louvigné-du-Désert. L’effectif compte alors 80 personnes.
        </p>
        <img src={histoire1} alt="" className="histoire1" />
      </div>
      <div className="paragraphe2">
        <img src={histoire3} alt="" className="histoire3" />
        <p className="p2">
          Parallèlement, le marché étant porteur, la décision est prise de
          développer une activité dans le Tarn, à la fois d’extraction de blocs
          et de production de monuments funéraires en granit du Tarn. Ce choix
          n'étant pas opportun, la société rencontre de grandes difficultés et
          dépose le bilan. Après l'obtention d'un concordat, l’entreprise change
          de nom et devient la S.A. La Générale du Granit. Elle reprend son
          développement et emploie désormais 85 collaborateurs. L’usine de Vabre
          dans le Tarn est alors démontée et transférée à Louvigné-du-Désert.
        </p>
      </div>
      <p className="p3">
        L’arrivée du Gris Celtic, granit breton, exploité en exclusivité par la
        société permet un développement rapide de l'activité funéraire.
        Parallèlement, La Générale du Granit participe à la naissance du
        groupement d’entreprises "La Centrale du Granit", dont le but est de
        répondre aux marchés de la voirie et du bâtiment sur lesquels la demande
        progresse.
      </p>
      <div className="paragraphe4">
        <p className="p4">
          Au début des années 80, La Générale du Granit se modernise et
          construit un atelier doté de nombreuses machines automatiques dont de
          grandes débiteuses pour le sciage, de nombreux polissoirs et son
          nouveau siège social. Quelques années plus tard, elle investit dans un
          nouvel atelier de fabrication de carreaux en faible épaisseur pour
          répondre à la demande du marché de la décoration intérieure.
          L’entreprise est désormais le 2ème opérateur du secteur avec 180
          salariés. En 1990, elle poursuit ses investissements et construit un
          atelier équipé de nouvelles machines à châssis, pour répondre à
          l’activité bâtiment où la demande continue de se développer. Deux ans
          plus tard, l’usine s’agrandit encore et installe un atelier doté d’une
          chaîne de polissage automatique.
        </p>
        <img src={histoire4} alt="" className="histoire4" />
      </div>
      <p className="p5">
        Après une période difficile, liée notamment au krach immobilier de 1992,
        le société rebondit et rachète 3 sociétés : Car Jab, Louvigné Carrières
        et Centrale de Voirie. Elle réorganise alors son équipement de
        production voirie, en intégrant l’usine de la gare à Louvigné-du-Désert.
        Le groupe compte désormais environ 160 personnes.
      </p>
      <p className="p6">
        Dans les années 2000, l’arrivée sur le marché funéraire de monuments
        produits à l’étranger impose à l’entreprise de développer une activité
        de négoce import.
      </p>
      <p className="p7">
        En 2007, La Générale du Granit, avec plusieurs autres producteurs,
        rachète la marque Pelé. L'entreprise devient alors leader du secteur.
        L'année suivante, elle devient propriétaire de la carrière de Rose de la
        Clarté GAD, ce qui renforce son activité d'exploitation de carrières.
      </p>
      <p className="p8">
        En 2012, l’entreprise sectorise son activité en exploitant 2 marques
        commerciales "Les Monumentalistes" qui sera désormais exclusivement
        dédiée à l’activité funéraire et "Atlantikstone" pour son activité de
        négoce, en particulier avec la région du Tarn. En parallèle, elle
        continue à exploiter le nom “La Générale du Granit” pour son activité de
        voirie.
      </p>
      <p className="p9">
        Depuis 50 ans, l'entreprise n'a cessé de se développer et a réorganisé
        au fur et à mesure ses ateliers augmentant ainsi sa productivité.
        Aujourd'hui, “La Générale du Granit” est toujours le leader de son
        secteur, compte désormais 130 collaborateurs et réalise un chiffre
        d'affaires annuel de 12 millions d'euros.
      </p>
    </div>
  );
}

export default Histoire;
