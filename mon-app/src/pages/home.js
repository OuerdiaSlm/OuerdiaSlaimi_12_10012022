import React, { useEffect, useState } from "react"
import { useParams } from "react-router";
import Activity from "../components/graphe/activity/activity";
import Apports from "../components/graphe/apports/apports";
import Performance from "../components/graphe/performance/performance";
import Score from "../components/graphe/score/score";
import Sessions from "../components/graphe/sessions/sessions";
import Header from "../components/header/hearderNav";
import HeaderLeft from "../components/hearderLeft/headerLeft";
import Hello from "../components/hello/hello";
import { getUserAverageSessions, getUserPerformance, getUserInfos, getUserActivity } from "../datas/datas";
import './style.css';

function Home (){
  const params= useParams();
  const [choice, setChoice]=useState(params.id);
  const [performance, setPerformance]= useState([]);
  const [session, setSession]= useState([]);
  const [apports, setApports] = useState([]) 
  const [activity, setActivity] = useState([]) 
  const [scoreP, setScore] = useState([]) 

  useEffect(()=>{
    // Performance
    const getPerformance = async () => {
      const request = await getUserPerformance(choice);
      if (!request) return alert('data error');
      setPerformance(request.data.data);
    };

    //session
    const getSession = async () => {
      const request = await getUserAverageSessions(choice);
      console.log(request)
      if (!request) return alert('data error');
      const formatData = request.data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: 'L' };
          case 2:
            return { ...data, day: 'M' };
          case 3:
            return { ...data, day: 'M' };
          case 4:
            return { ...data, day: 'J' };
          case 5:
            return { ...data, day: 'V' };
          case 6:
            return { ...data, day: 'S' };
          case 7:
            return { ...data, day: 'D' };
          default:
            return {...data };
        }
      });
      setSession(formatData);
    };

    //apports
    const getApports = async () => {
      const request = await getUserInfos(choice);
      if (!request) return alert('data error');
      setApports(request.data.keyData);
      console.log(request.data.keyData)
    };

    //Activity
    const getActivity = async () => {
      const request = await getUserActivity(choice);
      if (!request) return alert('data error');
      setActivity(request.data.sessions);
    };

    //Score
    const getScore = async () => {
      const request = await getUserInfos(choice);
      if (!request) return alert('data error');
      setScore(request.data.todayScore);
      console.log(request.data.todayScore)
    };

    getScore();
    getActivity();
    getApports();
    getSession();
    getPerformance();
  }, []);

  return (
    <section className="wagi">
    <Header/>
    <div className="aside">
      <HeaderLeft/>
      <div className="hello-activity">
        <Hello choice={choice}/>
        <div className="state-global-div">
          <div className="graph">
            <Activity activity={activity}/>
            <div className="Sessions-Performance-Score">
              <Sessions session={session}/>
              <Performance perf={performance}/>
              <Score scoreP={scoreP}/>
            </div>
          </div>
          <div>
            <Apports apports={apports}/>
          </div>
        </div>       
      </div>     
    </div>
  </section>

  )
}
export default Home;