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
      <h1 className="titre-escaliers">ESCALIERS</h1>
      <hr className="separation-menu"/>
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
              Escalier Int??rieur m??morial Colville sur mer
            </div>
            <div className='text-escaliers'>Type granit : Cachemir White flamm??</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers2} alt='' />
            <div className='title-escaliers'>Emmarchement Pays-Bas</div>
            <div className='text-escaliers'>Type granit : Lanhelin flamm??</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers3} alt='' />
            <div className='title-escaliers'>Escalier m??tro Rennes R??publique</div>
            <div className='text-escaliers'>Type granit : Louvign?? flamm??</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers4} alt='' />
            <div className='title-escaliers'>La D??fense Paris</div>
            <div className='text-escaliers'>Type granit : Lanhelin flamm??</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers5} alt='' />
            <div className='title-escaliers'>
              Escalier ext??rieur avenue de France PARIS
            </div>
            <div className='text-escaliers'>Type granit : Jaune Aurore grenaill??</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers6} alt='' />
            <div className='title-escaliers'>Escalier Op??ra Bastille Paris</div>
            <div className='text-escaliers'>Type granit : Lanhelin flamm??</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers7} alt='' />
            <div className='title-escaliers'>
              Escalier/ bancs M??morial Colleville Sur Mer
            </div>
            <div className='text-escaliers'>Type granit : Cachemir White flamm??</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='photo-escaliers'>
          <div className='container-escaliers'>
            <img src={escaliers8} alt='' />
            <div className='title-escaliers'>
              Escalier ext??rieur avenue de France PARIS
            </div>
            <div className='text-escaliers'>Type granit : Jaune Aurore grenaill??</div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='text-fixe-escaliers'>
        <p>
          La r??alisation d???un escalier est le point d???orgue d???un projet. Il
          valorise l???espace,<br /> le choix des mat??riaux est ainsi un point
          essentiel.<br />
          Pour que cet escalier soit unique et m??morable, nos experts sont ??
          votre disposition pour vous conseiller (type du granits, texture,
          accessibilit??, normes).
        </p>
      </div>
    </div>
  );
}

export default Escaliers;
