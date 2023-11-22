// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section id="landing" className="text-white py-16">
      <div className="bg-main flex justify-center">
        <div className="mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Crypto <span className="text-blue-purple">Trade</span> Signals &amp; Analysis
            for <span className="text-yellow">Binance</span> &amp;<span className="text-yellow"> Bybit</span>
          </h1>
          <div className="text-light-gray text-m uppercase">
            Raising the next generation of traders &amp; investors
          </div>
          <div className="cta-button-div mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-full">
                <a href="http://t.me/DeciusBot" target="_blank" className="landing-button w-full md:w-auto">
                  Join VIP Now
                </a>
              </div>
              <div className="w-full">
                <a href="#vip" className="bg-blue-purple w-full md:w-auto">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="partners-div mt-12">
            <div className="partner-text text-lg font-regular">Trusted by our partners</div>
            <div className="grid grid-cols-3 gap-4">
              <div className="partner">
                <img
                  src="public/assets/binance.png"
                  alt="Binance"
                  className="partner-img w-full h-auto"
                />
              </div>
              <div className="partner">
                <img
                  src="public/assets/bybit.png"
                  alt="Bybit"
                  className="partner-img w-full h-auto"
                />
              </div>
              <div className="partner">
                <img
                  src="public/assets/tradingview.png"
                  alt="TradingView"
                  className="partner-img w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
;
