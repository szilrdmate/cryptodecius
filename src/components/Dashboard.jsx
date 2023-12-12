// src/components/Dashboard.jsx
import React from "react";
import TopTrades from "./TopTrades";
import ProfitTrendChart from "./ProfitTrendChart";
import TradeDistributionChart from "./TradeDistributionChart";
import ProfitComparisonChart from "./ProfitComparisonChart";
import TotalProfit from "./TotalProfit";

import data from "../utils/data.json";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-8 text-center text-white">
        Historical <span className="text-light-blue">Trade</span> Dashboard
      </h1>
      <div className="grid mx-none lg:grid-cols-8 md:grid-rows-5 gap-4 grid-cols-1 grid-rows-12 md:max-w-full max-w-xl mx-auto">
        <div className="bg-purple border-[1px] border-white border-solid border-opacity-30 shadow-xl bg-opacity-40 backdrop-blur-[20px] rounded-xl lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 sm:col-start-1 sm:col-span-1 sm:row-start-1 sm:row-span-2 flex justify-center items-center sm:p-4 p-6">
          <TopTrades data={data} />
        </div>
        <div className="bg-purple border-[1px] border-white border-solid border-opacity-30 bg-opacity-40 backdrop-blur-[20px] rounded-xl lg:col-start-3 lg:col-span-6 lg:row-start-1 lg:row-span-3 sm:col-start-1 sm:col-span-1 sm:row-start-3 sm:row-span-3 flex justify-center items-center sm:p-4 p-6">
          <ProfitTrendChart data={data} />
        </div>
        <div className="bg-purple border-[1px] border-white border-solid border-opacity-30 bg-opacity-40 backdrop-blur-[20px] rounded-xl lg:col-start-1 lg:col-span-2 lg:row-start-3 lg:row-span-3 sm:col-start-1 sm:col-span-1 sm:row-start-6 sm:row-span-3 flex justify-center items-center sm:p-4 p-6">
          <TradeDistributionChart data={data} />
        </div>
        <div className="bg-purple border-[1px] border-white border-solid border-opacity-30 bg-opacity-40 backdrop-blur-[20px] rounded-xl lg:col-start-3 lg:col-span-3 lg:row-start-4 lg:row-span-2 sm:col-start-1 sm:col-span-1 sm:row-start-9 sm:row-span-2 flex justify-center items-center sm:p-4 p-6">
          <ProfitComparisonChart data={data} />
        </div>
        <div className="bg-purple border-[1px] border-white border-solid border-opacity-30 bg-opacity-40 backdrop-blur-[20px] rounded-xl lg:col-start-6 lg:col-span-3 lg:row-start-4 lg:row-span-2 sm:col-start-1 sm:col-span-1 sm:row-start-11 sm:row-span-2 flex justify-center items-center sm:p-4 p-6">
          <TotalProfit data={data} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
