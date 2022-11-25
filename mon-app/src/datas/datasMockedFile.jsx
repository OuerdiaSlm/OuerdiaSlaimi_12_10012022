import jsonDatas from "./jsonDatas.json"

export const DatasMocked=(paramId, dataType)=>{

  let request=0;

  //_______________FIRST NAME________________
  if( dataType ==="USER_MAIN_DATA"){

    jsonDatas[0].USER_MAIN_DATA.forEach(data=>{
      paramId=parseInt(paramId)
      if(data.id === paramId){
        request=data.userInfos.firstName
      }
    })
  }

  //_______________ACTIVITY__________________

  if( dataType ==="USER_ACTIVITY"){
    jsonDatas[1].USER_ACTIVITY.forEach(data=>{
      paramId=parseInt(paramId)

      if(data.userId === paramId){
        request=data.sessions
      }
    })
  }

  //________________SESSIONS_________________

  if( dataType ==="USER_AVERAGE_SESSIONS"){

    jsonDatas[2].USER_AVERAGE_SESSIONS.forEach(data=>{
      paramId=parseInt(paramId)
      
      if(data.userId === paramId){
        request=data.sessions
      }
    })
  }

  //______________PERFORMANCE________________

  if( dataType ==="USER_PERFORMANCE"){
    jsonDatas[3].USER_PERFORMANCE.forEach(data=>{
      paramId=parseInt(paramId)
        
      if(data.userId === paramId){
        request=data.data
      }
    })
  }

  //_________________SCORE___________________

  if( dataType ==="TODAYSCORE"){

    jsonDatas[0].USER_MAIN_DATA.forEach(data=>{
      paramId=parseInt(paramId)

      if(data.id === paramId){
        request=data.todayScore
      }
    })
  }

  //________________APPORTS__________________

  if( dataType ==="APPORTS"){

    jsonDatas[0].USER_MAIN_DATA.forEach(data=>{
      paramId=parseInt(paramId)

      if(data.id === paramId){
        request=data.keyData
      }
    })
  }

  return request
}