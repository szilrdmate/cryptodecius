// src/pages/Home.jsx
import React from "react";

const Home = () => {
  return (
    <div>
      <div
        id="landing"
        className="text-white py-16 bg-main bg-no-repeat bg-cover"
      >
        <div className="m-auto max-w-5xl">
          <div className="mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-8 leading-relaxed">
              Crypto <span className="text-blue-purple">Trade</span> Signals
              &amp; Analysis for <span className="text-yellow">Binance</span>{" "}
              &amp;<span className="text-yellow"> Bybit</span>
            </h1>
            <div className="text-light-gray font-medium uppercase tracking-widest">
              Raising the next generation of traders &amp; investors
            </div>
            <div className="cta-button-div mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className=" uppercase bg-yellow focus:outline-none focus:shadow-outline-yellow rounded-full px-10 py-5 text-2xl font-bold shadow-md">
                  <a
                    href="http://t.me/DeciusBot"
                    target="_blank"
                    className="landing-button w-full md:w-auto"
                  >
                    Join VIP Now
                  </a>
                </div>
                <div className=" uppercase bg-blue-purple focus:outline-none focus:shadow-outline-yellow rounded-full px-10 py-5 text-2xl font-bold shadow-md">
                  <a href="#vip" className="bg-blue-purple w-full md:w-auto">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="partners-div mt-12">
              <div className="text-light-gray font-medium uppercase tracking-widest mb-8">
                Trusted by our partners
              </div>
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
      </div>

      <div id="stats" className="bg-tri bg-repeat-y bg-cover min-h-screen">
        <div className="container max-w-5xl flex flex-col mx-auto py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue text-center">
            Join the <span className="text-blue-purple">Fastest Growing</span>{" "}
            Trading Community!
          </h1>
          <div className="aspect-w-16 aspect-h-9 inline-block">
            <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/uZAjwrZJNG4?si=uyXrneQWcTMJIshz&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
