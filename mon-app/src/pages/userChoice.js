import React from "react"
import {useState} from "react"
import {useNavigate} from "react-router-dom";
import Header from "../components/header/hearderNav";
import HeaderLeft from "../components/hearderLeft/headerLeft";
import './style.css';

function UserChoice (){
  const navigate = useNavigate();
  const [choice,setChoice]=useState()

  const handleChoice=(id)=>{
    setChoice(id)
    navigate("/home/"+id)
  }
  return(
    <>
      <Header/>
      <div className="aside">
        <HeaderLeft/>
        <div className="profilNameDiv">
          <h1 className="title">Bienvenu à tous sur <span className="SportSee">SportSee</span>!</h1>
          <h3 className="profilName" onClick={()=>handleChoice(18)}>▶ Veuillez cliquer sur "Cecilia" afin de voir les données du profile 18.</h3>
          <h3 className="profilName" onClick={()=>handleChoice(12)}>▶ Veuillez cliquer sur "Karl" afin de voir les données du profile 12.</h3>
        </div>
      </div>
    </>
  )
}
export default UserChoice;