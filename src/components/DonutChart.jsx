import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const DonutChart = () => {
  const data = [
    { name: 'Connected', value: 2 },
    { name: 'Not Connected', value: 2 },
  ];
  const COLORS = ['#aebdd6', '#235099'];

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}          // Center of the chart in X axis
        cy={100}          // Center of the chart in Y axis
        startAngle={90}   // Starting point of the first slice (90 degrees for vertical)
        endAngle={-270}   // Ending point of the last slice (-270 degrees for a complete circle)
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        
      </Pie>
    </PieChart>
  );
};

export default DonutChart;
