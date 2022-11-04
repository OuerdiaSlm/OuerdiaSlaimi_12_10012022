import React from "react"
import {useState} from "react"
import { Link , useNavigate} from "react-router-dom";
import Home from "./home";
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
      <h1 onClick={()=>handleChoice(18)}>Cecilia</h1>
      <h1 onClick={()=>handleChoice(12)}>Karl</h1>
    </>
  )
}
export default UserChoice;