import React, { useEffect, useState } from "react"
import './performance.css';
import { getUserPerformance } from'../../../datas/datas';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

  function Performance({perf}) {

    return (
      <section className="performance-graph">
          <RadarChart width={258} height={263} data={perf} cx="50%" cy="50%" outerRadius="80%" >
            <PolarGrid />
            <PolarAngleAxis tick={{ fill: 'white', fontSize: 12,   }}/>
            <Radar data={perf.data} dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
          </RadarChart>
      </section>
    )
  }
  export default Performance;