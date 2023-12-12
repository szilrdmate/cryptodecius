import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const ProfitComparisonChart = ({ data }) => {
  // Aggregate profits by trading pair
  const profitByPair = {};

  data.forEach(item => {
    item.trades.forEach(trade => {
      const profit = Number(trade.profit);
      if (profit > 0) {
        if (profitByPair[trade.pair]) {
          profitByPair[trade.pair] += profit;
        } else {
          profitByPair[trade.pair] = profit;
        }
      }
    });
  });

  // Calculate total profit and the number of pairs
  const totalProfit = Object.values(profitByPair).reduce((acc, profit) => acc + profit, 0);
  const numberOfPairs = Object.keys(profitByPair).length;

  // Calculate 150% of the average profit
  const averageProfit = totalProfit / numberOfPairs;
  const targetProfit = averageProfit * 1.5;

  // Filter pairs whose profits exceed 150% of the average
  const filteredData = Object.entries(profitByPair)
    .filter(([pair, profit]) => profit > targetProfit)
    .map(([pair, profit]) => ({ name: pair, profit }));

  return (
    <BarChart width={440} height={336} data={filteredData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="profit" fill="#8884d8" />
    </BarChart>
  );
};

export default ProfitComparisonChart;

