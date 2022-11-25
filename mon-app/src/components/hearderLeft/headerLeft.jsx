import React from "react"
import './headerLeft.css';
import bike from "../../assets/velo.png";
import yoga from "../../assets/yoga.png";
import fitness from "../../assets/fitness.png";
import swim from "../../assets/swim.png";
import Footer from "../footer/footer";

  function HeaderLeft() {
    return (
      <div className="headerLeft">
        <div>
          <ul className="aside-icones">
            <li className="icon">
              <img src={yoga} alt="yoga" />
            </li>
            <li className="icon">
              <img src={swim} alt="natation" />
            </li>
            <li className="icon">
              <img src={bike} alt="vélo" />
            </li>
            <li className="icon">
              <img src={fitness} alt="fitness" />
            </li>
          </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </div> 
    )
  }
  export default HeaderLeft;