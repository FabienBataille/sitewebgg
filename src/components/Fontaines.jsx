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
import './fontaines.css';
import fontaines1 from '../lesFontaines/fontaines1.jpeg';
import fontaines2 from '../lesFontaines/fontaines2.jpeg';
import fontaines3 from '../lesFontaines/fontaines3.gif';
import fontaines4 from '../lesFontaines/fontaines4.jpeg';
import fontaines5 from '../lesFontaines/fontaines5.jpeg';
import fontaines6 from '../lesFontaines/fontaines6.jpeg';
import fontaines7 from '../lesFontaines/fontaines7.jpeg';
import fontaines8 from '../lesFontaines/fontaines8.jpeg';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

function Fontaines() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='Fontaines'>
      <Swiper
        className='a-fontaines'
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines3} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines4} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines5} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines6} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines7} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-fontaines'>
          <img src={fontaines8} alt='' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className='allCarousel-fontaines'
        effect='fade'
        spaceBetween={10}
        slidesPerview={8}
        autoplay={true}
        /*navigation*/
        /*pagination={{ clickable: true }}*/
        thumbs={{ swiper: thumbsSwiper }}
        /*scrollbar={{ draggable: true }}*/
        onSwiper={() => console.log('Swiper')}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines1} alt='' />
            <div className='title-fontaines'>Fontaine Luxembourg</div>
            <div className='text-fontaines'>Type granit : Jaune Aurore bourchardé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines2} alt='' />
            <div className='title-fontaines'>Fontaine Colleville sur Mer</div>
            <div className='text-fontaines'>Type granit : Noir d’Afrique poli</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines3} alt='' />
            <div className='title-fontaines'>Fontaine Luxembourg</div>
            <div className='text-fontaines'>Type granit : Jaune Aurore bourchardé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines4} alt='' />
            <div className='title-fontaines'>Fontaine baigneuse Rennes, place de Bretagne</div>
            <div className='text-fontaines'>Type granit : Louvigné adouci</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines5} alt='' />
            <div className='title-fontaines'>Luxembourg Fontaine du Saint Esprit</div>
            <div className='text-fontaines'>Type granit : Gris Celtic poli</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines6} alt='' />
            <div className='title-fontaines'>Fontaine Amiens</div>
            <div className='text-fontaines'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines7} alt='' />
            <div className='title-fontaines'>Fontaine Plouenan</div>
            <div className='text-fontaines'>Type granit : Jaune Aurore grenaillé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-fontaines'>
          <div className='container-fontaines'>
            <img src={fontaines8} alt='' />
            <div className='title-fontaines'>Fontaines place Charles de gaulle Louvigné-du-Désert</div>
            <div className='text-fontaines'>Type granit : Louvigné flammé</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='text-fixe-verticaux'>
        <p>
        Notre expertise dans le façonnage du granit nous permet de réaliser tous types de fontaines.
        De la plus sobre à la plus élaborée, laisser parler votre imagination, nous ferons le reste.
        </p>
      </div>
    </div>
  );
}

export default Fontaines;
