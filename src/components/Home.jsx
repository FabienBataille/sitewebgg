import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./presentationBatiment.css";
import photo1 from "../photos/photo1.jpeg";
import photo2 from "../photos/photo2.jpg";
import photo3 from "../photos/photo3.jpeg";
import photo4 from "../photos/photo4.jpg";
import actu1 from "../actu/actu1.png";
import actu2 from "../actu/actu2.jpeg";
import actu3 from "../actu/actu3.jpeg";
import "./home.css";
import separation_horizontale from "../images/separation_horizontale.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home() {
  return (
    <div className="Home">
      <div className="corps">
        <aside className="left">
          <h2 className="titre-actualites">ACTUALITÉS</h2>
          <img
            src={separation_horizontale}
            className="separation-actualites"
            alt="separation_horizontale"
          />
          <div className="actualites">
            <div className="article1">
              <h6>La presse en parle</h6>
              <img src={actu1} className="actu3" alt="" />
              <p>
                Après avoir réalisé les aménagements du stade de football de
                Kransnodar en RUSSIE, le hasard à...
              </p>
            </div>
            <img
              src={separation_horizontale}
              className="separation_horizontale"
              alt="separation_horizontale"
            />
            <div className="article2">
              <h6>Nouveau site internet</h6>
              <img src={actu2} className="actu2" alt="" />
              <p>
                Nous sommes très heureux de vous accueillir sur le nouveau site
                de notre activité voirie ...
              </p>
            </div>
            <img
              src={separation_horizontale}
              className="separation_horizontale"
              alt="separation_horizontale"
            />
            <div className="article1">
              <h6>Nouveau polissoir à plat</h6>
              <img src={actu3} className="actu3" alt="" />
              <p>
                Un nouveau polissoir à plat a été installé au premier semestre
                2017. Cet outil nous...
              </p>
            </div>
          </div>
        </aside>
        <div className="right">
          <h1 className="titre-accueil">ACCUEIL</h1>
          <hr className="separation-titre-accueil" />
          <Swiper
            className="allCarousel-home"
            effect="fade"
            spaceBetween={50}
            slidesPerview={3}
            autoplay={true}
            /*navigation*/
            /*pagination={{ clickable: true }}*/
            /*scrollbar={{ draggable: true }}*/
            onSwiper={() => console.log("Swiper")}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="photo-home">
              <div className="container-home">
                <img src={photo1} alt="" />
                <div className="text-home">
                  Monument commémoratif en mémoire des victimes de la SHOA pour
                  la ville de Luxembourg.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="photo-home">
              <div className="container-home">
                <img src={photo2} alt="" />
                <div className="text-home">
                  Abords du Stade de foot du FC Krasnodar en RUSSIE
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="photo-home">
              <div className="container-home">
                <img src={photo4} alt="" />
                <div className="text-home">
                  Dallage Hôtel de ville Vincennes
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="photo-home">
              <div className="container-home">
                <img src={photo3} alt="" />
                <div className="text-home">Gare de Saint-Malo</div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="presentation-accueil">
            <h5 className="titre-paragraphe-accueil">
              LE SCULPTEUR DE VOS PROJETS
            </h5>
            <p className="paragraphe-accueil">
              Depuis les années 1980, La Générale du Granit vous propose de
              concrétiser vos envies d'aménagements publics et privés. Elle
              offre des services de qualité grâce à son savoir-faire français et
              des produits bretons certifiés. À l’écoute, elle façonne sur
              mesure le dallage de vos projets du bâtiment, de voirie ou de
              sculptures. Notre savoir-faire repose sur l’alliance de la
              tradition et d’une haute exigence de qualité.Toutes nos
              productions sont finies à la main. Les gravures et décorations
              sont réalisées par nos meilleurs compagnons. Grâce à des outils de
              production performants et à la maîtrise de nos équipes, qu’importe
              vos idées nous les réalisons. De la voirie standard à la plus
              complexe, nous vous garantissons le même niveau de qualité. À
              l’écoute de vos désirs les plus chers, nous vous proposons un
              choix très diversifié.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
