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
import './bancs.css';
import bancs1 from '../bancs/bancs1.jpeg';
import bancs2 from '../bancs/bancs2.jpeg';
import bancs3 from '../bancs/bancs3.jpeg';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

function Bancs() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='Bancs'>
      <Swiper
        className='a-bancs'
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={6 }
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        autoplay={{ onclick: true }}
      >
        <SwiperSlide className='vignette-bancs'>
          <img src={bancs1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-bancs'>
          <img src={bancs2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette-bancs'>
          <img src={bancs3} alt='' />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className='allCarousel-bancs'
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
        <SwiperSlide className='photo-bancs'>
          <div className='container-bancs'>
            <img src={bancs1} alt='' />
            <div className='title-bancs'>Cour européenne de justice, Luxembourg</div>
            <div className='text-bancs'>Type granit : Rose clarté finition adouci</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-bancs'>
          <div className='container-bancs'>
            <img src={bancs2} alt='' />
            <div className='title-bancs'>Cour européenne de justice, Luxembourg</div>
            <div className='text-bancs'>Type granit : Rose clarté finition adouci</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-bancs'>
          <div className='container-bancs'>
            <img src={bancs3} alt='' />
            <div className='title-bancs'>Cour européenne de justice, Luxembourg</div>
            <div className='text-bancs'>Type granit : Rose clarté finition adouci</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='text-fixe-verticaux'>
        <p>
        Sur une place ou dans un parc, les bancs offrent des points de repos et de partage.

Matériau très résistant, le granit est particulièrement adapté.

Il est la garantie d’un produit qui résistera dans le temps.

Nous réalisons des bancs sur mesure dans une large sélection de granits et de finitions.
        </p>
      </div>
    </div>
  );
}

export default Bancs;
