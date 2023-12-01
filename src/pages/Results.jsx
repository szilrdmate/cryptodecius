// src/pages/Home.jsx
import React from "react";

const Results = () => {
  const data = [
    {
      id: 1,
      year: 2022,
      month: "November",
      averageReturn: 3075,
      averageAccuracy: 82,
    },
    {
      id: 2,
      year: 2022,
      month: "December",
      averageReturn: 1665,
      averageAccuracy: 82,
    },
    {
      id: 3,
      year: 2023,
      month: "January",
      averageReturn: 2160,
      averageAccuracy: 80,
    },
    {
      id: 4,
      year: 2023,
      month: "February",
      averageReturn: 1420,
      averageAccuracy: 80,
    },
    {
      id: 5,
      year: 2023,
      month: "March",
      averageReturn: 1451,
      averageAccuracy: 78,
    },
    {
      id: 6,
      year: 2023,
      month: "April",
      averageReturn: 687,
      averageAccuracy: 81,
      trades: [
        {
          pair: "INJ/USDT",
          lev: "5X",
          profit: "75",
        },
        {
          pair: "LDO/USDT",
          lev: "5X",
          profit: "25",
        },
        {
          pair: "SOL/USDT",
          lev: "5X",
          profit: "110",
        },
        {
          pair: "BNB/USDT",
          lev: "5X",
          profit: "35",
        },
        {
          pair: "ROSE/USDT",
          lev: "5X",
          profit: "135",
        },
        {
          pair: "INJ/USDT",
          lev: "5X",
          profit: "60",
        },
        {
          pair: "FXS/USDT",
          lev: "5X",
          profit: "70",
        },
        {
          pair: "GPT/USDT",
          lev: "10X",
          profit: "200",
        },
        {
          pair: "SHIB/USDT",
          lev: "SPOT",
          profit: "10",
        },
        {
          pair: "QI/USDT",
          lev: "SPOT",
          profit: "7",
        },
        {
          pair: "UNI/USDT",
          lev: "SPOT",
          profit: "5",
        },
        {
          pair: "SOL/USDT",
          lev: "HODL",
          profit: "20",
        },
        {
          pair: "BNB/USDT",
          lev: "HODL",
          profit: "10",
        },
        {
          pair: "SOL/USDT",
          lev: "5X",
          profit: "-25",
        },
        {
          pair: "CELO/USDT",
          lev: "5X",
          profit: "-25",
        },
        {
          pair: "ETH/USDT",
          lev: "5X",
          profit: "-25",
        },
      ],
    },
  ];

  const reversedData = [...data].reverse();

  const calculateAverage = (key) => {
    return reversedData.map((item) => {
      if (item.trades) {
        const tradeValues = item.trades.reduce(
          (tradeAcc, trade) => {
            tradeAcc.profit += parseInt(trade.profit) || 0;
            tradeAcc.totalTrades += 1;
            tradeAcc.winCount += parseInt(trade.profit) > 0 ? 1 : 0;
            return tradeAcc;
          },
          { profit: 0, totalTrades: 0, winCount: 0 }
        );
        if (key === "return") {
          return tradeValues.profit;
        } else if (key === "accuracy") {
          return (tradeValues.winCount / tradeValues.totalTrades) * 100 || 0;
        }
      }
      return 0;
    });
  };
  
  return (
    <div className="bg-main bg-cover font-Montserrat">
    <div className="container max-w-5xl mx-auto py-16">
      <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-8 text-center text-white">
        Monthly <span className="text-light-blue">Trade</span> Reports
      </h1>
      <p className="text-center mb-8 uppercase text-light-gray font-medium tracking-widest">
        Every trade we have every took
      </p>
      <div className="grid grid-cols-1 grid-flow-row gap-4 max-w-3xl mx-auto">
        {reversedData.map((item, index) => (
          <div
            key={item.id}
            className="p-4 border border-white border-opacity-10 rounded-lg bg-[#fff] bg-opacity-10 backdrop-blur-[20px]"
          >
            <div className="mb-4 flex justify-between">
              <h1 className="text-4xl font-bold text-white">
                <span className="text-yellow">{`${item.month}`}</span>{" "}
                {`${item.year}`}
              </h1>
              <div>
                <ul className="text-light-gray text-right">
                  <li>Signal Gains: {calculateAverage("return")[index].toFixed(0)}%</li>
                  <li>Accuracy: {calculateAverage("accuracy")[index].toFixed(0)}%</li>
                </ul>
              </div>
            </div>
            <div>
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Trading Pair</th>
                      <th>Leverage</th>
                      <th>Profit</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {item.trades &&
                      item.trades.map((trade, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{trade.pair}</td>
                          <td>{trade.lev}</td>
                          <td>{trade.profit}%</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
