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
import escaliers1 from '../escaliers_photos/Escaliers1.jpg';
import escaliers2 from '../escaliers_photos/Escaliers2.jpg';
import escaliers3 from '../escaliers_photos/Escaliers3.jpg';
import escaliers4 from '../escaliers_photos/Escaliers4.jpg';
import escaliers5 from '../escaliers_photos/Escaliers5.jpg';
import escaliers6 from '../escaliers_photos/Escaliers6.jpg';
import escaliers7 from '../escaliers_photos/Escaliers7.jpg';
import escaliers8 from '../escaliers_photos/Escaliers8.jpg';

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
        className='allCarousel-escaliers'
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
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers1} alt='' />
            <div className='title-escaliers'>
              Escalier Intérieur mémorial Colville sur mer
            </div>
            <div className='text-escaliers'>Type granit : Cachemir White flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers2} alt='' />
            <div className='title-escaliers'>Emmarchement Pays-Bas</div>
            <div className='text-escaliers'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers3} alt='' />
            <div className='title-escaliers'>Escalier métro Rennes République</div>
            <div className='text-escaliers'>Type granit : Louvigné flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers4} alt='' />
            <div className='title-escaliers'>La Défense Paris</div>
            <div className='text-escaliers'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers5} alt='' />
            <div className='title-escaliers'>
              Escalier extérieur avenue de France PARIS
            </div>
            <div className='text-escaliers'>Type granit : Jaune Aurore grenaillé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers6} alt='' />
            <div className='title-escaliers'>Escalier Opéra Bastille Paris</div>
            <div className='text-escaliers'>Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers7} alt='' />
            <div className='title-escaliers'>
              Escalier/ bancs Mémorial Colleville Sur Mer
            </div>
            <div className='text-escaliers'>Type granit : Cachemir White flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers8} alt='' />
            <div className='title-escaliers'>
              Escalier extérieur avenue de France PARIS
            </div>
            <div className='text-escaliers'>Type granit : Jaune Aurore grenaillé</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='text-fixe-escaliers'>
        <p>
          La réalisation d’un escalier est le point d’orgue d’un projet. Il
          valorise l’espace,<br /> le choix des matériaux est ainsi un point
          essentiel.<br />
          Pour que cet escalier soit unique et mémorable, nos experts sont à
          votre disposition pour vous conseiller (type du granits, texture,
          accessibilité, normes).
        </p>
      </div>
    </div>
  );
}

export default Escaliers;
