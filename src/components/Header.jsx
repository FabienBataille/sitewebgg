import React from 'react'
import gg from '../images/gg.png'
import logo from '../images/logo_gg.png'
import homeIcon from '../images/Home_icon.png'
import mailIcon from '../images/NousContacter.png'
import "./header.css"
import QuiBurger from './QuiBurger'
import VoirieBurger from './VoirieBurger'
import BatimentBurger from './BatimentBurger'
import OuvragesBurger from './OuvragesBurger'
import MateriauxBurger from './MateriauxBurger'

function Header() {
    return (
        <div className="Header">
            <div className="logo_generale">
                <img src={logo} className="logo" alt="logo"/>
                <img src={gg} className="gg" alt="logo-header"/>  
            </div> 
                <div className="nav_bar">
                <ul>
                    <li className="tagIcon"><img src={homeIcon} className="homeIcon" alt="homeIcon"/></li>
                    <li><QuiBurger /></li>
                    <li><VoirieBurger /></li>
                    <li><BatimentBurger /></li>
                    <li><OuvragesBurger /></li>
                    <li><MateriauxBurger /></li>
                    <li className="mailIcon"><img src={mailIcon} className="mailIcon" alt="mailIcon"/></li>
                </ul>
            </div>
        </div>
    )
}

export default Header