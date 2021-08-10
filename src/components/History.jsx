import React from 'react'
import {Carousel} from '3d-react-carousal';
import photo1 from '../photos/photo1.jpg';
import photo2 from '../photos/photo2.jpg';
import photo3 from '../photos/photo3.jpg';
import photo4 from '../photos/photo4.jpg';
import photo5 from '../photos/photo5.jpg';
import './history.css';

function History() {

    let slides = [
        <img  src={photo1} alt="1" />,
        <img  src={photo2} alt="2" /> ,
        <img  src={photo3} alt="3" /> ,
        <img  src={photo4} alt="4" /> ,
        <img  src={photo5} alt="5" /> ];

    return (
        <div>
           <h1>UN PEU D'HISTOIRE</h1>
           <Carousel slides={slides} autoplay={true} interval={1000} />
        </div>
    )
}

export default History
