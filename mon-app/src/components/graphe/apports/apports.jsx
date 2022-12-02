import React from "react"
import energy from "../../../assets/energy.png";
import apple from "../../../assets/apple.png";
import chicken from "../../../assets/chicken.png";
import cheeseburger from "../../../assets/cheeseburger.png";
import './apports.css';
import { PropTypes } from 'prop-types';

/**
 * @function Apports
 * @param { array } apports: contains user information (calorieCount-carbohydrateCount-lipidCount-proteinCount)
 * @returns jsx
 */

  function Apports({apports}) {
    return (
      <div className="Apports-section">   
        <div className="apports-div">
          <div className="apports-infos">
            <div className="energy"> 
              <img src={energy} alt="vélo" />
            </div>
            <div className="apports-title-description">
              <span className="apports-title">{apports.calorieCount}kCal </span>
              <p className="apports-description">Calories</p>
            </div>
          </div>
          
        </div>
        <div className="apports-div">
          <div className="apports-infos">
            <div className="chicken"> 
              <img src={chicken} alt="vélo" />
            </div>
            <div className="apports-title-description">
              <span className="apports-title">{apports.proteinCount}g </span>
              <p className="apports-description">Proteines</p>
            </div>
          </div>
        </div>

        <div className="apports-div">
          <div className="apports-infos">
            <div className="apple"> 
              <img src={apple} alt="apple" />
            </div>
            <div className="apports-title-description">
              <span className="apports-title">{apports.carbohydrateCount}g </span>
              <p className="apports-description">Glucides</p>
            </div>
          </div>
        </div>

        <div className="apports-div">
          <div className="apports-infos">
            <div className="cheeseburger"> 
              <img src={cheeseburger} alt="vélo" />
            </div>
            <div className="apports-title-description">
              <span className="apports-title">{apports.lipidCount}g </span>
              <p className="apports-description">Lipides</p>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  export default Apports;


  Apports.propTypes = {
    apports: PropTypes.any.isRequired,
  };