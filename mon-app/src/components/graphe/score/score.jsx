import React from "react"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import './score.css';
import { PropTypes } from 'prop-types';

/**
 * @function Score
 * @param { number } scoreP: contains the Todayscore of the user
 * @returns jsx
 */

function Score({scoreP}) {
  const todayScore = scoreP;
  const scorePerCent = todayScore * 100;
  const rest = 100 - scorePerCent;
  const score = [
    { name: "scoreColor", value: scorePerCent, fillColor: "#e60000" },
    { name: "restScoreColor", value: rest, fillColor: `white` },
  ];
  const renderLabel = todayScore * 100 + "%";
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
        <p className="ScoreLegendNumber">{renderLabel}</p>
        <p className="ScoreLegend">
          de votre <br/>
          objectif
        </p>
      </div>
    </section>
  );
}
export default Score;

Score.propTypes = {
  scoreP: PropTypes.any.isRequired,
};