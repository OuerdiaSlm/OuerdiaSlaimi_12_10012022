import React, { useEffect, useState } from "react";
import './activity.css';
import ovalNoir from '../../assets/ovalNoir.png';
import ovalRouge from '../../assets/ovalRouge.png';
import {getUserActivity} from'../../datas/datas'
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  ResponsiveContainer
} from "recharts";

  function Activity() {
    const [data, setData] = useState([]) 
    useEffect(()=>{
      const id = 12
      const getData = async () => {
        const request = await getUserActivity(id);
        if (!request) return alert('data error');
        setData(request.data.sessions);
      };
      getData();
    }, []);

    return (
      <section className="activity-section">
        <div className="title-list">
          <h2 className="activity-title">Activité quotidienne</h2>
          <ul className="activity-list">
            <li className="activity-list-li"><img src={ovalNoir} className="oval" alt="" />Poids (kg)</li>
            <li className="activity-list-li"><img src={ovalRouge} className="oval" alt="" />Calories brûlées (kCal)</li>
          </ul>
        </div>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart width="100%" height={240} data={data} margin={{top: 20,right: 30,left: 20,bottom: 5,}}>
            <CartesianGrid vertical={false} strokeDasharray="1 1" />
            <XAxis dataKey="" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dy={15} />
            <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount="3" axisLine={false} orientation="right" tickLine={false} tick={{fontSize: 14, stroke:'#9B9EAC'}} dx={15}/>
            <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']}  hide={true}/>
              <Tooltip />
              <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]}/>
              <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]}/>
          </BarChart> 
        </ResponsiveContainer>   
      </section>
    )
  }
  export default Activity;