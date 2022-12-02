import React from "react";
import './hello.css';
import { PropTypes } from 'prop-types';

/**
 * @function Hello
 * @param { userName } any
 * @returns jsx
 */

  function Hello({userName}) {
    return (
      <div className="hello-div">   
        <h1 className="title">Bonjour <span className="firstName">{userName} </span>  </h1>
        <h2 className="message">Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
      </div>
    )
  }
  export default Hello;

  Hello.propTypes = {
    userName: PropTypes.any.isRequired,
  };