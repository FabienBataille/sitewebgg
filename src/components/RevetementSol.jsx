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
import './revetementSol.css';
import sol1 from '../sols/sol1.jpeg';
import sol2 from '../sols/sol2.jpeg';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

function RevetementSol() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='RevetementSol'>
      <h1 className="titre-revetementSol">REVÊTEMENTS SOLS</h1>
      <hr className="separation-menu-revetementSol"/>
      <Swiper
        className='a-sol'
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={2}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide className='vignette-sol'>
          <img src={sol1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-sol'>
          <img src={sol2} alt='' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className='allCarousel-sol'
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
        <SwiperSlide className='photo-sol'>
          <div className='container-sol'>
            <img src={sol1} alt='' />
            <div className='title-sol'>Hall d'entrée Champs Libres Rennes</div>
            <div className='text-sol'>Type granit : Lanhelin adouci</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-sol'>
          <div className='container-sol'>
            <img src={sol2} alt='' />
            <div className='title-sol'>Revêtement 50 avenue Montaigne</div>
            <div className='text-sol'>
              Type granit : Lanhelin | Giallo Vénéziano poli, adouci, bouchardé
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='text-fixe-sol'>
        <p>
          Le choix d’un dallage vous offre l’opportunité de créer une atmosphère
          qui sera l’âme de votre projet. Les différentes finitions que nous
          proposons (poli, adouci, flammé, grenaillé…) permettent de répondre à
          tous les projets de revêtements intérieurs. Investir dans le granit
          est un gage de pérennité assuré. Que votre aménagement intérieur soit
          traditionnel ou contemporain, le granit est le matériau noble qui
          saura vous ravir.
        </p>
      </div>
    </div>
  );
}

export default RevetementSol;
