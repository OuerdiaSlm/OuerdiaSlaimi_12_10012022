import React from "react"
import './performance.css';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";
import { PropTypes } from 'prop-types';

/**
 * @function Performance
 * @param { array } perf: contains information of performance (cardio-energy-endurance-strength and his values)
 * @returns 
 */

  function Performance({perf}) {
    return (
      <section className="performance-graph">
          <RadarChart width={258} height={263} data={perf} cx="50%" cy="50%" outerRadius="80%" >
            <PolarGrid />
            <PolarAngleAxis tick={{ fill: 'white', fontSize: 12,   }}/>
            <Radar data={perf} dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
          </RadarChart>
      </section>
    )
  }
  export default Performance;

  Performance.propTypes = {
    perf: PropTypes.array.isRequired,
  };