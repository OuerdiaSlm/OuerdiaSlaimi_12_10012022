import React, { useEffect, useState } from "react"
// import './score.css';
import axios from "axios";
import { getUserInfos } from'../../../datas/datas';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  function Score() {
    const [dataUser, setData] = useState([]) 
    useEffect(()=>{
      const id = 12
      const getData = async () => {
        const request = await getUserInfos(id);
        if (!request) return alert('data error');
        setData(request.data);
        console.log(request.data)
      };
      getData();
    }, []);

  //   const score = [
  //     { value: dataUser.todayScore || dataUser.score},
  //     { value: "%" }, 
  //     { value: 1 - dataUser.todayScore || dataUser.score }, 
  // ];
    return (
      <div className="score-div">  


      {/* <PieChart width={250} height={300} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        
      </PieChart>

        {<h1>ENTRE LES DEUX</h1>}
      {console.log(dataUser.todayScore)} 
      {/* <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={dataUser}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataUser.map((entry, index) => (
            <Cell key={`cell-${index}`} />
          ))}
        </Pie>
        <Pie
          data={dataUser}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {dataUser.map((entry, index) => (
            <Cell key={`cell-${index}`}  />
          ))}
        </Pie>
      </PieChart> */}
      

      
      {/* <PieChart >
        <Pie data={score} dataKey="value" innerRadius={70} outerRadius={85} startAngle={90}  >
          {score.map((entry, index) => (
            index === 0 
            ?  <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000"/>
            :  <Cell key={`cell-${index}`} fill="#ffffff"/>
          ))}
        </Pie>
      </PieChart>  */}

      
      </div>
    )
  }
  

































  // import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Group A', value: 0.12 },
//   { name: 'Group B', value: 0.88 },

// ];
// const COLORS = ['#0088FE', '#E7E4E4  '];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

//   render() {
//     return (
//       <PieChart width={400} height={400} onMouseEnter={this.onPieEnter}>
//         <Pie
//           data={data}
//           cx={120}
//           cy={200}
//           innerRadius={60}
//           outerRadius={80}
//           fill="#8884d8"
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     );
//   }
// }


































// import React, { PureComponent } from 'react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// const data = [
  
//   {
//     name: '25-29',
//     uv: 26.69,
//     pv: 4567,
//     fill: '#83a6ed',
//   },
//   {
//     name: '30-34',
//     uv: 15.69,
//     pv: 1398,
//     fill: '#8dd1e1',
//   },

 
// ];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

//   render() {
    
//     return (
//       <div>
//         {<p>Tesstttt</p>}
      
//       <ResponsiveContainer width={400} height={400}>
        
//         <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
//           <RadialBar
//             minAngle={15}
//             label={{ position: 'insideStart', fill: '#fff' }}
//             background
//             clockWise
//             dataKey="uv"
//           />
//           <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
//         </RadialBarChart>
//       </ResponsiveContainer>
//       </div>
//     );
//   }
// }


























