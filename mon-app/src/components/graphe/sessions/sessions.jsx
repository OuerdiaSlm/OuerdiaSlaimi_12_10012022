import React, { useEffect, useState } from "react";
import './sessions.css';
import { getUserAverageSessions } from'../../../datas/datas';
import {
  Tooltip,
  XAxis,
  LineChart,
  Line,
} from "recharts";

  function Sessions() {
    const [data, setData] = useState([]) 
    useEffect(() => {
      const id = 12
      const getData = async () => {
        const request = await getUserAverageSessions(id);
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
        setData(formatData);
      };
      getData();
    }, []);

    return (
      <section className="average-sessions-section">
        <div className="session-title">
          <h2 className="average-sessions-title">Durée moyenne des sessions</h2>
        </div>
        <div className="sessions-graph">
          <LineChart width={248} height={127} data={data} >
            <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'white'}} dy={15} />
            <Tooltip />
            <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke:'white' }}/>
          </LineChart>
        </div>
      </section>
    )
  }
  export default Sessions;