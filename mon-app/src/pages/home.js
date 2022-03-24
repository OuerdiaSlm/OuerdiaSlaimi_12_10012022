import React from "react"
import Activity from "../components/graphe/activity";
import Apports from "../components/graphe/apports/apports";
import Performance from "../components/graphe/performance/performance";
import Score from "../components/graphe/score/score";
import Sessions from "../components/graphe/sessions/sessions";
import Header from "../components/header/hearderNav";
import HeaderLeft from "../components/hearderLeft/headerLeft";
import Hello from "../components/hello/hello";
import './style.css';

function Home (){
  return (
    <section className="wagi">
      <Header/>
      <div className="aside">
        <HeaderLeft/>
        <div className="hello-activity">
          <Hello/>
          <div className="state-global-div">
            <div className="graph">
              <Activity/>
              <div className="Sessions-Performance-Score">
                <Sessions/>
                <Performance/>
                <Score/>
              </div>
            </div>
            <div>
              <Apports/>
            </div>
          </div>       
        </div>     
      </div>
    </section>
  )
}
export default Home;