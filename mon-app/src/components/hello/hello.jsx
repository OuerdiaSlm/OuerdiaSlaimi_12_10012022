import React, { useEffect, useState } from "react";
import './hello.css';
import { getUserInfos } from'../../datas/datas';
import { PropTypes } from 'prop-types';

/**
 * @function Hello
 * @param { number } choice: profile id (18/12)
 * @returns 
 */

  function Hello({choice}) {
    const [dataUser, setData] = useState([]) 
    useEffect(()=>{
      const getData = async () => {
        const request = await getUserInfos(choice);
        if (!request) return alert('data error');
        setData(request.data.userInfos);
      };
      getData();
    }, []);

    return (
      <div className="hello-div">   
        <h1 className="title">Bonjour <span className="firstName">{dataUser.firstName} </span>  </h1>
        <h2 className="message">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    )
  }
  export default Hello;

  Hello.propTypes = {
    choice: PropTypes.string.isRequired,
  };