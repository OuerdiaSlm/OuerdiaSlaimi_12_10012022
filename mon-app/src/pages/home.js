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
import dataMocked from "../datas/datasMocked"
import './style.css';


function Home (){
  const params= useParams();
  const [choice, setChoice]=useState(params.id);
  const [userName, setUserName]= useState([]);
  const [performance, setPerformance]= useState([]);
  const [session, setSession]= useState([]);
  const [apports, setApports] = useState([]) 
  const [activity, setActivity] = useState([]) 
  const [scoreP, setScore] = useState([]) 
  const [isMocked, setMocked] = useState(false) 

  useEffect(()=>{

    // userNama
    const getUserName = async () => {
      const request = await getUserInfos(choice);
      let request2;
      if (!request) {
        // data = dataMocked.USER_PERFORMANCE
        dataMocked.USER_MAIN_DATA.forEach(data=>{
          if(Number(params.id) === data.id){
            request2=data.userInfos.firstName
            setUserName(request2)
          }
        })
      }else{
        request2=request.data.userInfos.firstName
      setUserName(request2);
      }
    }

    //Activity
    const getActivity = async () => {
      const request = await getUserActivity(choice);
      let request2;
      if (!request) {
        // data = dataMocked.USER_MAIN_DATA
        dataMocked.USER_ACTIVITY.forEach(data=>{
          if(Number(params.id) === data.userId){
            request2=data.sessions
            setActivity(request2)
          }
        })
      }
      else{
        request2=request.data.sessions
        setActivity(request2);
      }
    }

    //session
    const getSession = async () => {
      const request = await getUserAverageSessions(choice);
      //console.log(request)
      let request2;
      if (!request) {
        dataMocked.USER_AVERAGE_SESSIONS.forEach(data=>{
          if(Number(params.id) === data.userId){
            request2=data.sessions
          
          }
        })
      } else{
        request2=request.data.sessions
      }
      const formatData = request2.map((data) => {
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
    }

    // Performance
    const getPerformance = async () => {
      const request = await getUserPerformance(choice);
      let request2;
      if (!request) {
        // data = dataMocked.USER_PERFORMANCE
        dataMocked.USER_PERFORMANCE.forEach(data=>{
          if(Number(params.id) === data.userId){
            request2=data.data
            setPerformance(request2)
          }
        })
      }
      else{
        request2=request.data.data
        setPerformance(request2);
      }
    }

    //Score
    const getScore = async () => {
      const request = await getUserInfos(choice);
      let request2;
        if (!request) {
          // data = dataMocked.USER_MAIN_DATA
          dataMocked.USER_MAIN_DATA.forEach(data=>{
            if(Number(params.id) === data.id){
              request2=data.todayScore
              setScore(request2)
            }
          })
        }
        else{
          request2=request.data.todayScore
          setScore(request2);
        }

    }

    //apports
    const getApports = async () => {
      const request = await getUserInfos(choice);
      let request2;
      if (!request) {
        // data = dataMocked.USER_MAIN_DATA
        dataMocked.USER_MAIN_DATA.forEach(data=>{
          if(Number(params.id) === data.id){
            request2=data.keyData
            setApports(request2)
          }
        })
      }
      else{
        request2=request.data.keyData
        setApports(request2);
      }
    }

    getUserName();
    getActivity();
    getSession();
    getPerformance();
    getScore();
    getApports();
    
  }, []);

  return (
    <section className="wagi">
    <Header/>
    <div className="aside">
      <HeaderLeft/>
      <div className="hello-activity">
        <Hello userName={userName}/>
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