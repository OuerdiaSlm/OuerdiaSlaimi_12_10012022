import React, { useEffect, useState } from "react"
import './performance.css';
import { getUserPerformance } from'../../../datas/datas';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

  function Performance() {
    const [data, setData] = useState([]) 
    useEffect(()=>{
      const id = 12
      const getData = async () => {
        const request = await getUserPerformance(id);
        if (!request) return alert('data error');
        setData(request.data.data);
      };
      getData();
    }, []);

    return (
      <section className="performance-graph">
          <RadarChart width={258} height={263} data={data.data} cx="50%" cy="50%" outerRadius="80%" >
            <PolarGrid />
            <PolarAngleAxis tick={{ fill: 'white', fontSize: 12,   }}/>
            <Radar data={data} dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
          </RadarChart>
      </section>
    )
  }
  export default Performance;