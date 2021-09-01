import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Scrollbar,
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.css";
import "./dalles.css";
import dalles1 from "../dalles_photos/dalles1.jpeg";
import dalles2 from "../dalles_photos/dalles2.jpeg";
import dalles3 from "../dalles_photos/dalles3.jpeg";
import dalles4 from "../dalles_photos/dalles4.jpeg";
import dalles5 from "../dalles_photos/dalles5.jpeg";
import dalles6 from "../dalles_photos/dalles6.jpeg";
import dalles7 from "../dalles_photos/dalles7.jpeg";
import dalles8 from "../dalles_photos/dalles8.jpeg";
import dalles9 from "../dalles_photos/dalles9.jpeg";
import dalles10 from "../dalles_photos/dalles10.jpeg";
import dalles11 from "../dalles_photos/dalles11.jpeg";
import dalles12 from "../dalles_photos/dalles12.jpeg";
import dalles13 from "../dalles_photos/dalles13.jpeg";
import dalles14 from "../dalles_photos/dalles14.jpeg";
import dalles15 from "../dalles_photos/dalles15.jpeg";
import dalles16 from "../dalles_photos/dalles16.jpeg";
import dalles17 from "../dalles_photos/dalles17.jpeg";
import dalles18 from "../dalles_photos/dalles18.jpeg";
import dalles19 from "../dalles_photos/dalles19.jpeg";

SwiperCore.use([Navigation, Pagination, Autoplay, Thumbs, EffectFade, Scrollbar]);

function Dalles() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="Dalles">
       <h1 className="titre-dalles">DALLES</h1>
      <hr />
      <Swiper
        className="a-dalles"
        onSwiper={setThumbsSwiper}
        spaceBetween={30}
        slidesPerView={8}
        freeMode={true}
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        scrollbar={{ draggable: true }}
        autoplay={false}
      >
        <SwiperSlide className="vignette-dalles">
          <img src={dalles1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles6} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles7} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles8} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles9} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles10} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles11} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles12} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles13} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles14} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles15} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles16} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles17} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles18} alt="" />
        </SwiperSlide>
        <SwiperSlide className="vignette-dalles">
          <img src={dalles19} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="allCarousel-dalles"
        effect="fade"
        spaceBetween={10}
        slidesPerview={19}
        autoplay={true}
        /*navigation*/
        /*pagination={{ clickable: true }}*/
        thumbs={{ swiper: thumbsSwiper }}
        /*scrollbar={{ draggable: true }}*/
        onSwiper={() => console.log("Swiper")}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles1} alt="" />
            <div className="title-dalles">
              EXTÉRIEUR MÉMORIAL COLLEVILLE SUR MER
            </div>
            <div className="text-dalles">
              Type granit : Cachemir White flammé
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles2} alt="" />
            <div className="title-dalles">MÉMORIAL COLLEVILLE SUR MER</div>
            <div className="text-dalles">
              Type granit : Noir d'Afrique finition poli et sablée
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles3} alt="" />
            <div className="title-dalles">GHERKIN LONDRES</div>
            <div className="text-dalles">
              Type granit : Lanhelin flammé et éclaté
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles4} alt="" />
            <div className="title-dalles">GHERKIN LONDRES</div>
            <div className="text-dalles">Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles5} alt="" />
            <div className="title-dalles">HÔTEL DE VILLE PARIS</div>
            <div className="text-dalles">
              Type granit : Rose clarté | Lanhélin | Gris celtic flammé
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles6} alt="" />
            <div className="title-dalles">DALLAGE HÔTEL DE VILLE VINCENNES</div>
            <div className="text-dalles">
              Type granit : rose clarté | Louvigné flammé
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles7} alt="" />
            <div className="title-dalles">RENNES RUE DU CHAMP JACQUET</div>
            <div className="text-dalles">Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles8} alt="" />
            <div className="title-dalles">PLACE CLAIREFONTAINE LUXEMBOURG</div>
            <div className="text-dalles">Lanhélin flammé et adouci</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles9} alt="" />
            <div className="title-dalles">
              DALLAGE MÉMORIAL COLLEVILLE SUR MER
            </div>
            <div className="text-dalles">
              Ganit de type : Kashemire White flammé
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles10} alt="" />
            <div className="title-dalles">DALLAGE RENNES PLACE DE BRETAGNE</div>
            <div className="text-dalles">Type granit : Louvigné flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles11} alt="" />
            <div className="title-dalles">
              DALLAGE HÔTEL DE VILLE COPENHAGUE
            </div>
            <div className="text-dalles">
              Type granit : Lanhelin scié et flammé
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles12} alt="" />
            <div className="title-dalles">
              LONDRES GHERKIN REVÊTEMENT DE SOL
            </div>
            <div className="text-dalles">Type granit : Lanhelin Flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles13} alt="" />
            <div className="title-dalles">
              DALLAGE PLACE DE L'HÔTEL DE VILLE, NEUILLY SUR SEINE
            </div>
            <div className="text-dalles">
              Type granit : Lanhelin | Rose clarté | Louvigné | Jaune Aurore |
              Finition flammé
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles14} alt="" />
            <div className="title-dalles">VOIRIE BOIS-LE-DUC (PAYS-BAS)</div>
            <div className="text-dalles">Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles15} alt="" />
            <div className="title-dalles">
              ABORDS DU STADE DE FOOT DU FC KRASNODAR EN RUSSIE
            </div>
            <div className="text-dalles">Type granit : Lanhélin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles16} alt="" />
            <div className="title-dalles">LOUVRES PARIS</div>
            <div className="text-dalles">Type granit : Lanhelin Flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles17} alt="" />
            <div className="title-dalles">LA DÉFENSE PARIS</div>
            <div className="text-dalles">Type granit : Lanhelin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles18} alt="" />
            <div className="title-dalles">
              ABORDS DU STADE DE FOOT DU FC KRASNODAR EN RUSSIE
            </div>
            <div className="text-dalles">Type granit : Lanhélin flammé</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="photo-dalles">
          <div className="container-dalles">
            <img src={dalles19} alt="" />
            <div className="title-dalles">MÉMORIAL DE COLLEVILLE SUR MER</div>
            <div className="text-dalles">
              Type granit : Cachemir White flammé
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="text-fixe-dalles">
        <p>
          Le dallage, de par sa conception, donne un aspect plus sophistiqué que
          le pavé. Les possibilités d’agencement sont infinies et permettent de
          respecter au mieux les projets les plus ambitieux. Les dalles sont
          sciées aux dimensions souhaitées. Les états de surface ainsi que les
          finitions sont faits sur mesure selon vos demandes. Nous proposons à
          nos clients la solution de dallage quand le projet doit être décoratif
          et confortable. C’est notamment le cas pour les places, les
          esplanades, les trottoirs ou encore les cours intérieurs. Les dalles
          que nous proposons à la Générale du Granit sont compatible avec une
          large gamme de granits.
        </p>
      </div>
    </div>
  );
}

export default Dalles;
