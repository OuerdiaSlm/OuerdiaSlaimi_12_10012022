import React from "react"
import { Link , useNavigate} from "react-router-dom";
import './style.css';

function NotFound (){
  const navigate = useNavigate();
  const navigateToUserChoice = () => {
    // navigate to /
    navigate('/');
    };
  return (
    <div className="notFound">
    <h1 className="error">Erreur <span className="SportSee">404</span></h1>
    <p>L'API semble ne pas fonctionner</p>
    <p onClick={navigateToUserChoice}> ▶ Retour vers l'Accueil</p>
  </div>
  )
}
export default NotFound;