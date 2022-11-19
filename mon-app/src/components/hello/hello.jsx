import React from "react";
import './hello.css';
import { PropTypes } from 'prop-types';

/**
 * @function Hello
 * @param { number } choice: profile id (18/12)
 * @returns 
 */

  function Hello({userName,disabledAPI}) {
    return (
      <div className="hello-div">   
      <p className="donneesMocked">{disabledAPI}</p>
        <h1 className="title">Bonjour <span className="firstName">{userName} </span>  </h1>
        <h2 className="message">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    )
  }
  export default Hello;

  Hello.propTypes = {
    userName: PropTypes.string.isRequired,
  };