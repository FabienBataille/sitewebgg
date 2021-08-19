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
import './escaliers.css';
import escaliers1 from '../escaliers_photos/escaliers1.jpeg';
import escaliers2 from '../escaliers_photos/escaliers2.jpeg';
import escaliers3 from '../escaliers_photos/escaliers3.jpeg';
import escaliers4 from '../escaliers_photos/escaliers4.jpeg';
import escaliers5 from '../escaliers_photos/escaliers5.jpeg';
import escaliers6 from '../escaliers_photos/escaliers6.jpeg';
import escaliers7 from '../escaliers_photos/escaliers7.jpeg';
import escaliers8 from '../escaliers_photos/escaliers8.jpeg';

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade]);

function Escaliers() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className='Escaliers'>
      <Swiper
        className='a'
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={8}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
      >
        <SwiperSlide className='vignette'>
          <img src={escaliers1} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={escaliers2} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={escaliers3} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={escaliers4} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={escaliers5} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={escaliers6} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={escaliers7} alt='' />
        </SwiperSlide>
        <SwiperSlide className='vignette'>
          <img src={escaliers8} alt='' />
        </SwiperSlide>
      </Swiper>
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
          <div className='container'>
            <img src={escaliers1} alt='' />
            <div className='title'>
              Escalier Intérieur mémorial Colville sur mer
            </div>
            <div className='text'>Type granit : Cachemir White flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <div className='container'>
            <img src={escaliers2} alt='' />
            <div className='title'>Emmarchement Pays-Bas</div>
            <div className='text'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <div className='container'>
            <img src={escaliers3} alt='' />
            <div className='title'>Escalier métro Rennes République</div>
            <div className='text'>Type granit : Louvigné flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <div className='container'>
            <img src={escaliers4} alt='' />
            <div className='title'>La Défense Paris</div>
            <div className='text'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <div className='container'>
            <img src={escaliers5} alt='' />
            <div className='title'>
              Escalier extérieur avenue de France PARIS
            </div>
            <div className='text'>Type granit : Jaune Aurore grenaillé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <div className='container'>
            <img src={escaliers6} alt='' />
            <div className='title'>Escalier Opéra Bastille Paris</div>
            <div className='text'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <div className='container'>
            <img src={escaliers7} alt='' />
            <div className='title'>
              Escalier/ bancs Mémorial Colleville Sur Mer
            </div>
            <div className='text'>Type granit : Cachemir White flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo'>
          <div className='container'>
            <img src={escaliers8} alt='' />
            <div className='title'>
              Escalier extérieur avenue de France PARIS
            </div>
            <div className='text'>Type granit : Jaune Aurore grenaillé</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Escaliers;
