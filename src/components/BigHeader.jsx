import React from "react";
import gg_grand from "../logos/logo_essai.png";

import homeIcon from "../images/Home_icon.png";
import mailIcon from "../images/NousContacter.png";
import "./bigHeader.css";
import QuiBurgerBig from "./QuiBurgerBig";
import VoirieBurgerBig from "./VoirieBurgerBig";
import BatimentBurgerBig from "./BatimentBurgerBig";
import OuvragesBurgerBig from "./OuvragesBurgerBig";
import MateriauxBurgerBig from "./MateriauxBurgerBig";
import { Link } from "react-router-dom";

function BigHeader() {
  return (
    <div className="BigHeader">
      <div className="logo_generale_big">
        <Link to="/">
          <img src={gg_grand} className="gg_grand" alt="logo-header" />
        </Link>
      </div>
      <div className="nav_bar_big">
        <ul>
          <li className="tagIcon_big">
            <Link to="/accueil">
              <img src={homeIcon} className="homeIcon_big" alt="homeIcon" />
            </Link>
          </li>
          <li>
            <QuiBurgerBig />
          </li>
          <li>
            <VoirieBurgerBig />
          </li>
          <li>
            <BatimentBurgerBig />
          </li>
          <li>
            <OuvragesBurgerBig />
          </li>
          <li>
            <MateriauxBurgerBig />
          </li>
          <li className="mailIcon_big">
            <Link to="/contact">
              <img src={mailIcon} className="mailIcon_big" alt="mailIcon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BigHeader;
