import React, { useEffect, useState } from "react";
import './sessions.css';
import { getUserAverageSessions } from'../../../datas/datas';
import {
  Tooltip,
  XAxis,
  LineChart,
  Line,
} from "recharts";

  function Sessions({session}) {
    return (
      <section className="average-sessions-section">
        <div className="session-title">
          <h2 className="average-sessions-title">Durée moyenne des sessions</h2>
        </div>
        <div className="sessions-graph">
          <LineChart width={248} height={127} data={session} >
            <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'white'}} dy={15} />
            <Tooltip />
            <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke:'white' }}/>
          </LineChart>
        </div>
      </section>
    )
  }
  export default Sessions;