import React from "react"
import './headerNav.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

  function Header() {
    return (
      <div className="global-div-header">
        <header className="">
          <div className="Barre-navigation">
            <img src={logo} className="logo" alt="" />
            <ul className="Barre-text">  
              <Link className='menu-link'  to={"/"}>   
                <li className="headerNav-li" >Accueil</li>
              </Link>
              <li className="headerNav-li">Profil</li>
              <li className="headerNav-li">Réglage</li>
              <li className="headerNav-li">Communauté</li>
            </ul>
          </div>
        </header>
      </div>
    )
  }
  export default Header;