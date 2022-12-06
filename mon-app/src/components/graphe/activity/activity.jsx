import React from "react";
import './activity.css';
import ovalNoir from '../../../assets/ovalNoir.png';
import ovalRouge from '../../../assets/ovalRouge.png';
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ResponsiveContainer
} from "recharts";
import { PropTypes } from 'prop-types';


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ff0101',
          height: 75,
          color: 'white',
          fontSize: 12,
          textAlign: 'center',
          padding: 10,
        }}
      >
        <p>{`${payload[0].value} kg`}</p>
        <p>{`${payload[1].value} kCal`}</p>
      </div>
    );
  }
  return null;
};


/**
 * @function Activity
 * @param { array } activity: contains data of daily activity (day-kilogram-calories)
 * @return jsx
 */

  function Activity({activity}) {
    return (
      <section className="activity-section">
        <div className="title-list">
          <h2 className="activity-title">Activité quotidienne</h2>
          <ul className="activity-list">
            <li className="activity-list-li"><img src={ovalNoir} className="oval" alt="" />Poids (kg)</li>
            <li className="activity-list-li"><img src={ovalRouge} className="oval" alt="" />Calories brûlées (kCal)</li>
          </ul>
        </div>
        
        <ResponsiveContainer width="100%" height="80%">
          <BarChart width="100%" height={240} data={activity} margin={{top: 20,right: 30,left: 20,bottom: 5,}}>
            <CartesianGrid vertical={false} strokeDasharray="1 1" />
            <XAxis dataKey="" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dy={15} />
            <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dx={15}/>
            <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
            <Tooltip content={CustomTooltip} offset={30} />{' '}
              <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
              <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
          </BarChart> 
        </ResponsiveContainer>   
      </section>
    )
  }
  export default Activity;

  Activity.propTypes = {
    activity: PropTypes.array.isRequired,
  };