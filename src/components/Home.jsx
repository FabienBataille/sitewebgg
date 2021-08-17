import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper';
import 'swiper/swiper-bundle.css';
import './presentationBatiment.css';
import photo1 from '../photos/photo1.jpg';
import photo2 from '../photos/photo2.jpg';
import photo3 from '../photos/photo3.jpg';
import photo4 from '../photos/photo4.jpg';
import photo5 from '../photos/photo5.jpg';
import actu1 from '../actu/actu1.png';
import actu2 from '../actu/actu2.jpeg';
import actu3 from '../actu/actu3.jpeg';
import './home.css';
import separation_horizontale from '../images/separation_horizontale.png'

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home() {
  return (
    <div className='Home'>
      <div className='corps'>
        <aside>
            <div className='actualites'>
                <div className='article1'>
                    <h6>La presse en parle</h6>
                    <img src={actu1} className='actu3' alt='' />
                    <p>
                    Après avoir réalisé les aménagements du stade de football de
                    Kransnodar en RUSSIE, le hasard à...
                    </p>
                </div>
                <img src={separation_horizontale} className="separation_horizontale" alt="separation_horizontale"/>
                <div className='article2'>
                    <h6>Nouveau site internet</h6>
                    <img src={actu2} className='actu2' alt='' />
                    <p>
                    Nous sommes très heureux de vous accueillir sur le nouveau site de
                    notre activité voirie ...
                    </p>
                </div>
                <img src={separation_horizontale} className="separation_horizontale" alt="separation_horizontale"/>
                <div className='article1'>
                    <h6>Nouveau polissoir à plat</h6>
                    <img src={actu3} className='actu3' alt='' />
                    <p>
                    Un nouveau polissoir à plat a été installé au premier semestre
                    2017. Cet outil nous...
                    </p>
                </div>
            </div>
        </aside>
        <Swiper
          className='allCarousel'
          effect='fade'
          spaceBetween={50}
          slidesPerview={3}
          autoplay={true}
          /*navigation*/
          pagination={{ clickable: true }}
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
      </div>
    </div>
  );
}

export default Home;
