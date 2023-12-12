import React from "react";
import { PieChart, Cell, Pie, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A837FF', '#FF5733', '#50FF33', '#33FFF5', '#FF69B4'];

const TradeDistributionChart = ({ data }) => {
  // Aggregate data by trading pair
  const tradeCountByPair = {};

  data.forEach(item => {
    item.trades.forEach(trade => {
      tradeCountByPair[trade.pair] = (tradeCountByPair[trade.pair] || 0) + 1;
    });
  });

  // Calculate total trades
  const totalTrades = Object.values(tradeCountByPair).reduce((acc, cur) => acc + cur, 0);

  // Filter pairs with more than 5% and group others
  let otherCount = 0;
  const processedData = Object.entries(tradeCountByPair).reduce((acc, [name, value]) => {
    const percentage = (value / totalTrades) * 100;
    if (percentage > 2.8) {
      acc.push({ name, value });
    } else {
      otherCount += value;
    }
    return acc;
  }, []);

  // Add 'Other' category if necessary
  if (otherCount > 0) {
    processedData.push({ name: 'Other', value: otherCount });
  }

  return (
    <PieChart width={288} height={480}>
      <Pie
        data={processedData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
      >
        {
          processedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))
        }
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TradeDistributionChart;

