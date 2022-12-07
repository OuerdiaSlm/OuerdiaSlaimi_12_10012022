import React from "react";
import './sessions.css';
import {
  Tooltip,
  XAxis,
  LineChart,
  Line,
} from "recharts";
import { PropTypes } from 'prop-types';


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: 'white',
          fontSize: 10,
          fontWeight: 500,
          textAlign: 'center',
          padding: 10,
        }}
      >
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};



/**
 * @function Sessions
 * @param { Array } session: contains data of average-sessions (day-sessionLength)
 * @returns jsx
 */

  function Sessions({session}) {
    return (
      <section className="average-sessions-section">
          <h2 className="average-sessions-title">Durée moyenne des sessions</h2>
  
        <div className="sessions-graph">
          <LineChart width={248} height={250} data={session} >
          <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke:'white' }}/>
            <XAxis dataKey="day" tickLine={false} tick={{fontSize: 14, stroke:'white'}} dy={15} />
            <Tooltip content={CustomTooltip} cursor={{ stroke: 'black', strokeOpacity: 0.2, strokeWidth: 40}}
            offset={30}/>
          </LineChart>
        </div>
      </section>
    )
  }
  export default Sessions;

  Sessions.propTypes = {
    session: PropTypes.array.isRequired,
  };