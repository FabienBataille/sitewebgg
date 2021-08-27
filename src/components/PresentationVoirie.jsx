import React from 'react'
import presentation_voirie from '../images/presentation-voirie.jpeg'
import './presentationVoirie.css'

function PresentationVoirie() {
  return (
    <div className="PresentationVoirie">
      <h1>VOIRIE</h1>
      <hr />
      <div className="photo-text-batiment">
        <img src={presentation_voirie} alt=""/>
        <p>Leader dans la fabrication bretonne en granit, la Générale du Granit propose, depuis les années 1980, de répondre sur mesure aux projets urbains des municipalités.
Elle vous offre une large gamme de produits en granit destinée aux aménagements urbains.Elle s'étend des dalles et pavés aux bordures en passant par les bornes.
Grâce à nos savoir-faire et nos outils, nous concevons et mettons en œuvre vos projets de dallage et de pavage.
Pour chaque projet, nous apportons des solutions à vos demandes, et ce, dans un souci de qualité et de durabilité.</p>
      </div>
    </div>
  )
}

export default PresentationVoirie
