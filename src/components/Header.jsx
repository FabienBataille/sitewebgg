import React from "react";
import gg from "../logos/logo_essai.png";

import homeIcon from "../images/Home_icon.png";
import mailIcon from "../images/NousContacter.png";
import "./header.css";
import QuiBurger from "./QuiBurger";
import VoirieBurger from "./VoirieBurger";
import BatimentBurger from "./BatimentBurger";
import OuvragesBurger from "./OuvragesBurger";
import MateriauxBurger from "./MateriauxBurger";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="logo_generale">
        <img src={gg} className="gg" alt="logo-header" />
      </div>
      <div className="nav_bar">
        <ul>
          <li className="tagIcon">
            <Link to="/accueil">
              <img src={homeIcon} className="homeIcon" alt="homeIcon" />
            </Link>
          </li>
          <li>
            <QuiBurger />
          </li>
          <li>
            <VoirieBurger />
          </li>
          <li>
            <BatimentBurger />
          </li>
          <li>
            <OuvragesBurger />
          </li>
          <li>
            <MateriauxBurger />
          </li>
          <li className="mailIcon">
            <Link to="/contact">
              <img src={mailIcon} className="mailIcon" alt="mailIcon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
