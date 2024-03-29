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
import { getUserAverageSessions, getUserPerformance, getUserInfos, getUserActivity, getScoreInfos, getApportsInfos } from "../datas/datas";
import {DatasMocked} from "../datas/datasMockedFile"
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
  const [booleen, SetBoleen]=useState(true)
 
 
  useEffect(()=>{
    
    //_______________FIRST NAME________________
    const getUserName = async () => {
      const request = await getUserInfos(choice);
      let request2;
    
      if ( booleen === false) {
        request2= DatasMocked(choice,"USER_MAIN_DATA")
        setUserName(request2)

      } else if(request && booleen=== true){
        request2=request
        setUserName(request2); 
      }
      else if(!request){
        window.location.href = 'http://localhost:3001/error';
      }
    }

    //_______________ACTIVITY__________________
    const getActivity = async () => {
      const request = await getUserActivity(choice);
      let request2;
      
      if ( booleen === false) {
        request2 = DatasMocked(choice,"USER_ACTIVITY")
        setActivity(request2)

      } else if(request && booleen=== true){
        request2 = request
        setActivity(request2);
      }
      else if(!request){
        window.location.href = 'http://localhost:3001/error';
      }
    }

    //________________SESSIONS_________________
    const getSession = async () => {
      const request = await getUserAverageSessions(choice);
      let request2;

      if ( booleen === false) {
        request2= DatasMocked(choice,"USER_AVERAGE_SESSIONS")
        setSession(request2);

      } else if(request && booleen=== true){
        request2=request
      }
      else if(!request){
        window.location.href = 'http://localhost:3001/error';
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

    //______________PERFORMANCE________________
    const getPerformance = async () => {
      const request = await getUserPerformance(choice);
      let request2;

      if ( booleen === false) {
        request2= DatasMocked(choice,"USER_PERFORMANCE")
        setPerformance(request2)

      } else if(request && booleen=== true){
        request2=request
        setPerformance(request2);
      }
      else if(!request){
        window.location.href = 'http://localhost:3001/error';
      }
    }

    //_________________SCORE___________________
    const getScore = async () => {
      const request = await getScoreInfos(choice);
      let request2;

      if ( booleen === false) {
        request2= DatasMocked(choice,"TODAYSCORE")
        setScore(request2)

      } else if(request && booleen=== true){
        request2=request
        setScore(request2);
      }
      else if(!request){
        window.location.href = 'http://localhost:3001/error';
      }
    }

    //________________APPORTS__________________
    const getApports = async () => {
      const request = await getApportsInfos(choice);
      let request2;

      if ( booleen === false) {
        request2= DatasMocked(choice,"APPORTS")
        setApports(request2)

      } else if(request && booleen=== true){
        request2=request
        setApports(request2);
      }
      else if(!request){
        window.location.href = 'http://localhost:3001/error';
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
    <section>
      <Header/>
      <div className="aside">
        <HeaderLeft/>
        <div className="hello-activity">
          <Hello userName={userName} />
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