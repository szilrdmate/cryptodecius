import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ProfitComparisonChart = ({ data }) => {
  // Aggregate profits by trading pair
  const profitByPair = {};

  data.forEach(item => {
    item.trades.forEach(trade => {
      if (profitByPair[trade.pair]) {
        profitByPair[trade.pair] += trade.profit;
      } else {
        profitByPair[trade.pair] = trade.profit;
      }
    });
  });

  // Convert the aggregated data into an array for Recharts
  const processedData = Object.entries(profitByPair).map(([pair, profit]) => {
    return { name: pair, profit };
  });

  return (
    <BarChart width={600} height={300} data={processedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="profit" fill="#8884d8" />
    </BarChart>
  );
};

export default ProfitComparisonChart;
