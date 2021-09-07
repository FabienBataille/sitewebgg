import React from 'react'
import PhotoBatiment from '../images/presentation-batiment.jpeg'


function PresentationBatiment() {
  return (
    <div className="PresentationBatiment">
      <h1>BÂTIMENT</h1>
      <hr />
      <div className="photo-text-batiment">
        <img src={PhotoBatiment} alt=""/>
        <p>Leader en Bretagne dans la transformation du granit, la Générale du Granit propose depuis les années 1980, de répondre, sur mesure, aux projets d’espaces extérieurs et intérieurs.
  La Générale du Granit offre une large gamme de produits en granit destinée aux espaces extérieurs. Grâce à son savoir-faire, elle vous accompagne dans la réalisation de votre projet.
  La Générale du Granit apporte des solutions à vos demandes, afin de vous garantir qualité et durabilité.</p>
      </div>
    </div>
  )
}

export default PresentationBatiment
