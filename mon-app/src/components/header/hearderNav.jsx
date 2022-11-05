import React from "react"
import './headerNav.css';
import logo from '../../assets/logo.png';
import {useNavigate} from "react-router-dom";

  function Header() {
    const navigate = useNavigate();
    const navigateToUserChoice = () => {
    // navigate to /
    navigate('/');
    };
    return (
      <div className="global-div-header">
        <header className="">
          <div className="Barre-navigation">
            <img src={logo} className="logo" alt="" />
            <ul className="Barre-text">  
                <li onClick={navigateToUserChoice} className="headerNav-li" >Accueil</li>
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