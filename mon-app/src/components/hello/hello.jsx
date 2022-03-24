import React, { useEffect, useState } from "react"
import './hello.css';
import axios from "axios";
import { getUserInfos } from'../../datas/datas';

  function Hello() {
    const [dataUser, setData] = useState([]) 
    useEffect(()=>{
      const id = 12
      const getData = async () => {
        const request = await getUserInfos(id);
        if (!request) return alert('data error');
        setData(request.data.userInfos);
        console.log(request.data)
      };
      getData();
    }, []);

    return (
      <div className="hello-div">   
      {console.log(dataUser)} 
        <h1 className="title">Bonjour <span className="firstName">{dataUser.firstName} </span>  </h1>
        <h2 className="message">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    )
  }
  export default Hello;