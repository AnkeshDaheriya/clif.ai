import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { category: "Technology", Goals: 80, Actuals: 50 },
  { category: "Communication", Goals: 90, Actuals: 70 },
  { category: "Presentation", Goals: 85, Actuals: 60 },
  { category: "Business and", Goals: 75, Actuals: 50 },
  { category: "People", Goals: 80, Actuals: 55 },
  { category: "Other Skill", Goals: 90, Actuals: 65 },
];

const Charts = () => {
  const [hiddenBars, setHiddenBars] = useState({
    Goals: false,
    Actuals: false,
  });

  const handleLegendClick = (dataKey) => {
    setHiddenBars((prev) => ({
      ...prev,
      [dataKey]: !prev[dataKey], // Toggle the visibility of the clicked bar
    }));
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          {/* <CartesianGrid /> Removed strokeDasharray for solid grid lines */}
          <XAxis dataKey="category" />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <Tooltip />
          <Legend
            onClick={(e) => handleLegendClick(e.dataKey)}
            wrapperStyle={{ cursor: "pointer" }}
          />
          <Bar
            dataKey="Goals"
            fill="#FFA500"
            barSize={20}
            style={{ display: hiddenBars.Goals ? "none" : "block" }}
          />
          <Bar
            dataKey="Actuals"
            fill="#FFDDC1"
            barSize={20}
            style={{ display: hiddenBars.Actuals ? "none" : "block" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
