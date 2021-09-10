import React from "react";
import logo_banniere from "../logos/logo_banniere.png";

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
        <Link to="/">
          <img src={logo_banniere} className="logo_banniere" alt="" />
        </Link>
      </div>
      
        <ul className="nav_bar">
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
  );
}

export default Header;
