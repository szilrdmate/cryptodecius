// src/pages/About.jsx
import React from "react";

const About = () => {
  
  return (
    <div id="about" className="font-Montserrat bg-dark-blue">    

      <div className="bg-team bg-contain bg-no-repeat w-full pt-[40.66%]">
        <div className="mx-auto container w-full h-full">
            <div className="flex justify-between mb-4">
              <h1 className="font-bold text-5xl text-white">Meet The Team</h1>
              <h1 className="font-bold text-5xl text-yellow">A-Team</h1>
            </div>
            <p className="text-left text-light-gray mb-4 uppercase tracking-widest">hello world</p>
            <p className="text-justify text-light-gray leading-6">
              Crypto Decius is more than just a trading platform; it's a community
              of passionate traders and investors dedicated to navigating the
              cryptocurrency markets with expert guidance and results-driven
              strategies. Our journey began with the mission of raising the next
              generation of traders and investors, empowering them with Live VIP
              Signals, Market Insights, Technical Analysis, 24/7 Priority Support,
              10x Alerts, and Long-term Buys. Trusted by industry leaders like
              Binance, Bybit, and TradingView, Crypto Decius is committed to
              delivering results and helping our members achieve their financial
              goals. Join us on this exciting journey, sign up for VIP, and
              experience the power of expert guidance in your trading endeavors.
            </p>
        </div>  
      </div>

      <div className="py-16 bg-gradient-to-b from-dark-blue via-dark-blue to-[#1e1726]" id="team-cards">
        <div className="container mx-auto grid md:grid-cols-3 gap-16 sm:grid-cols-1">
          <div className="bg-purple h-96 rounded-3xl shadow-2xl hover:shadow-[#803efb90] duration-300 grid grid-rows-3 grid-cols-1 overflow-hidden ">
            <div className="row-span-2 bg-team"><h1 className="text-white font-semibold relative top-6 left-6">Meet Our Team</h1></div>
            <div className="row-span-1 py-3 px-4">
              <h1 className="text-white font-semibold mb-2">More hello</h1>
              <p className="text-xs text-justify text-light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sequi illo, at unde, iste totam quas harum, ullam in qui tempore minus.</p>
            </div>
          </div>
          <div className="bg-purple h-96 rounded-3xl shadow-2xl hover:shadow-[#803efb90] duration-300 grid grid-rows-3 grid-cols-1 overflow-hidden ">
            <div className="row-span-2 bg-team"><h1 className="text-white font-semibold relative top-6 left-6">Talent</h1></div>
            <div className="row-span-1 py-3 px-4">
              <h1 className="text-white font-semibold mb-2">Talent</h1>
              <p className="text-xs text-justify text-light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sequi illo, at unde, iste totam quas harum, ullam in qui tempore minus.</p>
            </div>
          </div>
          <div className="bg-purple h-96 rounded-3xl shadow-2xl hover:shadow-[#803efb90] duration-300 grid grid-rows-3 grid-cols-1 overflow-hidden ">
            <div className="row-span-2 bg-team"><h1 className="text-white font-semibold relative top-6 left-6">Join Our Community</h1></div>
            <div className="row-span-1 py-3 px-4">
              <h1 className="text-white font-semibold mb-2">Join Our Community</h1>
              <p className="text-xs text-justify text-light-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sequi illo, at unde, iste totam quas harum, ullam in qui tempore minus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
