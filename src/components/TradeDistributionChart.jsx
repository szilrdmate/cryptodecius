import React, { useState, useEffect } from "react";
import { PieChart, Cell, Pie, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A837FF', '#FF5733', '#50FF33', '#33FFF5', '#FF69B4'];

const CustomLegend = ({ payload }) => {
  return (
    <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ color: COLORS[index % COLORS.length], marginBottom: 4 }}>
          <span style={{ marginRight: 10 }}>●</span> {entry.value}
        </li>
      ))}
    </ul>
  );
};

const TradeDistributionChart = ({ data }) => {
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 976 && window.innerWidth < 1224);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 976 && window.innerWidth < 1224);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize tradeCountByPair here
  const tradeCountByPair = {};

  data.forEach(item => {
    item.trades.forEach(trade => {
      tradeCountByPair[trade.pair] = (tradeCountByPair[trade.pair] || 0) + 1;
    });
  });;

  // Calculate total trades
  const totalTrades = Object.values(tradeCountByPair).reduce((acc, cur) => acc + cur, 0);

  // Filter pairs with more than 2.8% and group others
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
  const renderLegend = () => {
    if (isMediumScreen) {
      return <CustomLegend payload={processedData} />;
    } else {
      return <Legend />;
    }
  };

  return (
    <PieChart width={288} height={480}>
      <Pie
        data={processedData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={90}
        label
      >
        {processedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      {renderLegend()}
    </PieChart>
  );
};


export default TradeDistributionChart;
