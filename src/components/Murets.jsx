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
import './murets.css';
import murets1 from '../murets/murets1.jpeg';
import murets2 from '../murets/murets2.jpeg';
import murets3 from '../murets/murets3.jpeg';
import murets4 from '../murets/murets4.jpeg';
import murets5 from '../murets/murets5.jpeg';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

function Murets() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='Murets'>
      <Swiper
        className='a-murets'
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={6 }
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        autoplay={{ onclick: true }}
      >
        <SwiperSlide className='vignette-murets'>
          <img src={murets1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-murets'>
          <img src={murets2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-murets'>
          <img src={murets2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-murets'>
          <img src={murets3} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-murets'>
          <img src={murets4} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-murets'>
          <img src={murets5} alt='' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className='allCarousel-murets'
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
        <SwiperSlide className='photo-murets'>
          <div className='container-murets'>
            <img src={murets1} alt='' />
            <div className='title-murets'>Muret extérieur Mémorial Colleville sur mer</div>
            <div className='text-murets'>Type granit : Mason flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-murets'>
          <div className='container-murets'>
            <img src={murets2} alt='' />
            <div className='title-murets'>Muret Rennes place de Bretagne</div>
            <div className='text-murets'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-murets'>
          <div className='container-murets'>
            <img src={murets3} alt='' />
            <div className='title-murets'>Muret Colleville sur mer</div>
            <div className='text-murets'>Type granit : Mason flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-murets'>
          <div className='container-murets'>
            <img src={murets4} alt='' />
            <div className='title-murets'>Musée d'art moderne MUDAM Luxembourg</div>
            <div className='text-murets'>Type granit : Mason flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-murets'>
          <div className='container-murets'>
            <img src={murets5} alt='' />
            <div className='title-murets'>Musée d'art moderne MUDAM Luxembourg</div>
            <div className='text-murets'>Type granit : Mason flammé</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='text-fixe-verticaux'>
        <p>
        Un muret de granit peut être ornemental ou permettre de délimiter un espace. À la fois authentique et traditionnel, le muret en granit ne manquera pas de faire effet dans vos projets d’aménagement. 
        </p>
      </div>
    </div>
  );
}

export default Murets;
