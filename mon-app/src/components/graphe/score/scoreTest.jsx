
import React, { useEffect, useState } from "react"
import { getUserInfos } from'../../../datas/datas';
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import './score.css';

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



  const todayScore = dataUser.todayScore;
  console.log(dataUser.todayScore);
  const scorePerCent = todayScore * 100;
  const rest = 100 - scorePerCent;
  const score = [
    { name: "scoreColor", value: scorePerCent, fillColor: "#e60000" },
    { name: "restScoreColor", value: rest, fillColor: `white` },
  ];
  const renderLabel = todayScore * 100 + "%";
  console.log(renderLabel);
  const data01 = [{ name: "A", value: 100 }];
  return (
    <section className="ScoreContainer">
      <h1  className="ScoreTitle">Score</h1>
      <ResponsiveContainer width={"100%"} height={159} className="score-graph">
        <PieChart>
          <Pie
            data={data01}
            dataKey="value"
            innerRadius={0}
            outerRadius={80}
            fill="white"
            stroke="none"
          />
          <Pie
            dataKey="value"
            data={score}
            fill="#8884d8"
            innerRadius={68}
            outerRadius={80}
            startAngle={90}
            endAngle={480}
          >
            {score.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="ScoreLegend-container">
        <p className="ScoreLegend">{renderLabel}</p>
        <p className="ScoreLegend">
          de votre <br />
          objectif
        </p>
      </div>
    </section>
  );
}
export default Score;