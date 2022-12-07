import React from "react"
import './performance.css';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { PropTypes } from 'prop-types';



const TransformKind = (tickItem) => {
  const Kind = [
    'Intensité',
    'Vitesse',
    'Force',
    'Endurance',
    'Energie',
    'Cardio',
  ];
  if (tickItem) return Kind[tickItem -1];
};


/**
 * @function Performance
 * @param { array } perf: contains information of performance (cardio-energy-endurance-strength and his values)
 * @returns jsx
 */

  function Performance({perf}) {
    return (
      <section className="performance-graph">
          <RadarChart width={258} height={263} data={perf} cx="50%" cy="50%" outerRadius="80%" >
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" tickFormatter={TransformKind}  tick={{ fill: 'white', fontSize: 12, fontWeight: '400'}} />
            <Radar data={perf} dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
          </RadarChart>
      </section>
    )
  }
  export default Performance;

  Performance.propTypes = {
    perf: PropTypes.array.isRequired,
  };