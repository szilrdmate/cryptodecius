// src/pages/Results.jsx
import React, { useState } from "react";
import data from "../utils/data.json";
import Dashboard from "../components/Dashboard";

const Results = () => {
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const reversedData = [...data].reverse();
  const totalPages = Math.ceil(reversedData.length / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (currentPage - 1) * cardsPerPage;
  const endIdx = startIdx + cardsPerPage;
  const visibleData = reversedData.slice(startIdx, endIdx);

  const calculateAverage = (key, trades) => {
    if (!trades) return 0;

    const tradeValues = trades.reduce(
      (tradeAcc, trade) => {
        tradeAcc.profit += parseInt(trade.profit) || 0;
        tradeAcc.totalTrades += 1;
        tradeAcc.winCount += parseInt(trade.profit) > 0 ? 1 : 0;
        return tradeAcc;
      },
      { profit: 0, totalTrades: 0, winCount: 0 }
    );

    if (key === "return") {
      return tradeValues.profit || 0;
    } else if (key === "accuracy") {
      return (tradeValues.winCount / tradeValues.totalTrades) * 100 || 0;
    }

    return 0;
  };

  return (
    <div className="bg-main bg-cover font-Montserrat">
      <div className="px-4 py-16 h-[100vh-80px]">
        <Dashboard />
      </div>

      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-8 text-center text-white">
          Monthly <span className="text-light-blue">Trade</span> Reports
        </h1>
        <p className="text-center mb-8 uppercase text-light-gray font-medium tracking-widest">
          Every trade we have every took
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-flow-row gap-4 lg:max-w-5xl sm:max-w-3xl mx-auto">
          {visibleData.map((item, index) => (
            <div
              key={item.id}
              className="overflow-x-scroll lg:max-h-[450px] p-8 border border-white border-opacity-10 rounded-lg bg-[#fff] bg-opacity-10 backdrop-blur-[20px]"
            >
              <div className="mb-8 flex justify-between">
                <h1 className="text-4xl font-bold text-white">
                  <span className="text-yellow">{`${item.month}`}</span>{" "}
                  {`${item.year}`}
                </h1>
                <div>
                  <ul className="text-light-gray text-right">
                    <li>
                      Signal Gains:{" "}
                      {calculateAverage("return", item.trades).toFixed(0)}%
                    </li>
                    <li>
                      Accuracy:{" "}
                      {calculateAverage("accuracy", item.trades).toFixed(0)}%
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <table className="table-auto w-full">
                  <thead className="text-white">
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Trading Pair</th>
                      <th scope="col">Leverage</th>
                      <th scope="col">PNL</th>
                    </tr>
                  </thead>
                  <tbody className="text-center text-light-gray">
                    {item.trades &&
                      item.trades.map((trade, index) => (
                        <tr key={index}>
                          <td className="py-2">{index + 1}</td>
                          <td className="py-2">{trade.pair}</td>
                          <td className="py-2">{trade.lev}</td>
                          <td className="py-2">{trade.profit}%</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 pb-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-light-blue text-white font-bold py-2 px-4 rounded"
        >
          Previous Page
        </button>
        <p className="text-white mx-8">
          Page {currentPage} / {totalPages}
        </p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-light-blue text-white font-bold py-2 px-4 rounded"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Results;
