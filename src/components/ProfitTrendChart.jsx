import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const monthToNumber = {
  January: '01', February: '02', March: '03', April: '04', May: '05', June: '06',
  July: '07', August: '08', September: '09', October: '10', November: '11', December: '12'
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white p-4 bg-opacity-30 backdrop-blur-[20px] rounded-xl text-white">
        <p className="label">{`${label} : ${payload[0].value}%`}</p>
      </div>
    );
  }

  return null;
};

const ProfitTrendChart = ({ data }) => {
  const profitByMonth = {};

  data.forEach(item => {
    const monthNumber = monthToNumber[item.month];
    const timeKey = `${item.year}-${monthNumber}`;

    profitByMonth[timeKey] = profitByMonth[timeKey] || 0;
    item.trades.forEach(trade => {
      profitByMonth[timeKey] += Number(trade.profit);
    });
  });

  // Convert to array and sort by timeKey (YYYY-MM)
  const sortedData = Object.entries(profitByMonth).sort((a, b) => a[0].localeCompare(b[0]));

  // Convert sorted data to "MM/YYYY" for display
  const processedData = sortedData.map(([timeKey, profit]) => {
    const [year, month] = timeKey.split('-');
    return { time: `${month}/${year}`, profit };
  });

  return (
    <LineChart width={600} height={300} data={processedData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis dataKey="profit" />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line type="monotone" dataKey="profit" stroke="#8884d8" />
    </LineChart>
  );
};

export default ProfitTrendChart;
