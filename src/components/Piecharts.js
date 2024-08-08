import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function MyPieChart({ complete, remaining }) {
  const data = [
    { name: 'Completed', value: complete },
    { name: 'Remaining', value: remaining },
  ];
  const COLORS = ['green', 'red'];

  return (
    <div className='w-64 md:96'>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        <h1 className='text-center font-bold text-2xl'>Track Of Progress</h1>
    </div>
  );
}
export default MyPieChart;
