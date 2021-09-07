import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
} from 'swiper';
import 'swiper/swiper-bundle.css';
import './revetementV.css';
import verticaux1 from '../verticaux/verticaux1.jpeg';
import verticaux2 from '../verticaux/verticaux2.jpeg';
import verticaux3 from '../verticaux/verticaux3.jpeg';
import verticaux4 from '../verticaux/verticaux4.jpeg';
import verticaux5 from '../verticaux/verticaux5.jpeg';
import verticaux6 from '../verticaux/verticaux6.jpeg';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

function RevetementV() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='RevetementV'>
      <h1 className="titre-revetementV">REVÊTEMENTS VERTICAUX</h1>
      <hr className="separation-menu-revetementV"/>
      <Swiper
        className='a-verticaux'
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={6 }
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        autoplay={{ onclick: true }}
      >
        <SwiperSlide className='vignette-verticaux'>
          <img src={verticaux1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-verticaux'>
          <img src={verticaux2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-verticaux'>
          <img src={verticaux3} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-verticaux'>
          <img src={verticaux4} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-verticaux'>
          <img src={verticaux5} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-verticaux'>
          <img src={verticaux6} alt='' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className='allCarousel-verticaux'
        effect='fade'
        spaceBetween={50}
        slidesPerview={3}
        autoplay={true}
        /*navigation*/
        /*pagination={{ clickable: true }}*/
        thumbs={{ swiper: thumbsSwiper }}
        /*scrollbar={{ draggable: true }}*/
        onSwiper={() => console.log('Swiper')}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='photo-verticaux'>
          <div className='container-verticaux'>
            <img src={verticaux1} alt='' />
            <div className='title-verticaux'>Cour européenne de justice, Luxembourg</div>
            <div className='text-verticaux'>Type granit : Rose clarté finition adouci</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-verticaux'>
          <div className='container-verticaux'>
            <img src={verticaux2} alt='' />
            <div className='title-verticaux'>Gare de Monaco</div>
            <div className='text-verticaux'>Type granit : Marbre et verre soudé et poli</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-verticaux'>
          <div className='container-verticaux'>
            <img src={verticaux3} alt='' />
            <div className='title-verticaux'>Mémorial de Colleville Sur Mer</div>
            <div className='text-verticaux'>Type granit : Noir d’Afrique finition flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-verticaux'>
          <div className='container-verticaux'>
            <img src={verticaux4} alt='' />
            <div className='title-verticaux'>Dinan</div>
            <div className='text-verticaux'>Type granit : Jaune Aurore flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-verticaux'>
          <div className='container-verticaux'>
            <img src={verticaux5} alt='' />
            <div className='title-verticaux'>Extérieur Mémorial Colleville sur mer</div>
            <div className='text-verticaux'>Type granit : Noir d’Afrique finition flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-verticaux'>
          <div className='container-verticaux'>
            <img src={verticaux6} alt='' />
            <div className='title-verticaux'>Métro Rennes Sainte Anne</div>
            <div className='text-verticaux'>Type granit : Jaune Aurore adouci</div>
          </div>

        </SwiperSlide>
      </Swiper>
      <div className='text-fixe-verticaux'>
        <p>
        Le revêtement vertical en granit offre, en plus d’une qualité esthétique, la possibilité d’intégrer l’isolation par l’extérieur.
Cette approche permet de ne pas modifier les surfaces intérieures tout en mettant en conformité les anciens bâtiments.
Nous sélectionnons les meilleurs granits afin de vous offrir un large spectre de couleurs. La gamme que nous proposons est le fruit d’une sélection constante des meilleurs granits.
Différentes finitions sont possibles :
poli, adouci, flammé, grenaillé, brossé diamant.
Concernant les dimensions et les fixations, notre équipe accompagnera l’architecte qui aura en charge votre projet.
        </p>
      </div>
    </div>
  );
}

export default RevetementV;
