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
import './presentationBatiment.css';
import photo1 from '../photos/photo1.jpg';
import photo2 from '../photos/photo2.jpg';
import photo3 from '../photos/photo3.jpg';
import photo4 from '../photos/photo4.jpg';
import photo5 from '../photos/photo5.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

function PresentationBatiment() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='PresentationBatiment'>
      <h1>PRÉSENTATION</h1>
      <Swiper
        className='allCarousel'
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
        <SwiperSlide className='photo'>
          <img src={photo1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <img src={photo2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <img src={photo3} alt='' />
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <img src={photo4} alt='' />
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <img src={photo5} alt='' />
        </SwiperSlide>
      </Swiper>
      <Swiper
       className="a"
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide className='vignette'>
          <img src={photo1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={photo2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={photo3} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={photo4} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={photo5} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PresentationBatiment;
