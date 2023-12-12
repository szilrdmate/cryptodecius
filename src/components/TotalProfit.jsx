// src/components/TotalProfit.jsx
import React from "react";

const TotalProfit = ({ data }) => {
    let totalProfit = 0;
    let totalTrades = 0;
    let profitableTrades = 0;
  
    data.forEach(item => {
      item.trades.forEach(trade => {
        totalProfit += Number(trade.profit);
        totalTrades++;
        if (trade.profit > 0) {
          profitableTrades++;
        }
      });
    });
  
    const averageProfit = totalProfit / totalTrades;
    const averageAccuracy = (profitableTrades / totalTrades) * 100;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl md:text-3xl font-medium text-white mb-2">Total Profit:</h1>
      <p className="text-4xl md:text-5xl text-yellow font-bold mb-2">{totalProfit.toFixed(2)}%</p>
      <h1 className="text-3xl md:text-3xl font-medium text-white mb-2">Average Accuracy:</h1>
      <p className="text-4xl md:text-5xl text-yellow font-bold">{averageAccuracy.toFixed(2)}%</p>
    </div>
  );
};

export default TotalProfit;
