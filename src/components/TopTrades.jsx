import React from "react";

const TopTrades = ({ data }) => {
  const topTrades = data.flatMap(item => item.trades)
    .sort((a, b) => b.profit - a.profit)
    .slice(0, 5);

  return (
    <div>
      <h1 className="text-xl font-bold text-white mb-8">Top 5 Trades of All-Time</h1>
      <ol className="text-light-gray list-decimal list-inside space-y-4">
        {topTrades.map((trade, index) => (
          <li key={index} className="my-2">
            {trade.pair} - Profit: {trade.profit}%
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopTrades;
