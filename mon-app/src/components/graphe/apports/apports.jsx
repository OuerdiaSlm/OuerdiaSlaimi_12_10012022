import React, { useEffect, useState } from "react"
import { getUserInfos } from'../../../datas/datas';
import energy from "../../../assets/energy.png";
import apple from "../../../assets/apple.png";
import chicken from "../../../assets/chicken.png";
import cheeseburger from "../../../assets/cheeseburger.png";
import './apports.css';

  function Apports() {
    const [dataUser, setData] = useState([]) 
    useEffect(()=>{
      const id = 12
      const getData = async () => {
        const request = await getUserInfos(id);
        if (!request) return alert('data error');
        setData(request.data.keyData);
        console.log(request.data.keyData)
      };
      getData();
    }, []);

    return (
      <div className="Apports-section">   
        {console.log(dataUser)} 
        <div className="apports-div">
          <div className="apports-infos">
            <div className="energy"> 
              <img src={energy} alt="vélo" />
            </div>
            <div className="apports-title-description">
              <span className="apports-title">{dataUser.calorieCount}kCal </span>
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
              <span className="apports-title">{dataUser.proteinCount}g </span>
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
              <span className="apports-title">{dataUser.carbohydrateCount}g </span>
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
              <span className="apports-title">{dataUser.lipidCount}g </span>
              <p className="apports-description">Lipides</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  export default Apports;



  // {"data":
  //   {"id":12,
  //     "userInfos":{"firstName":"Karl","lastName":"Dovineau","age":31},
  //     "todayScore":0.12,
  //     "keyData":{"calorieCount":1930,"proteinCount":155,"carbohydrateCount":290,"lipidCount":50}
  //   }
  // }