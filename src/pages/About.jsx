// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div id="about" className="font-Montserrat bg-dark-blue">
      <div className="bg-team bg-cover bg-center bg-no-repeat w-full pt-[40.66%]">
        <div className="mx-auto container w-full h-full px-4">
          <div className="flex justify-between mb-4">
            <h1 className="font-bold text-5xl text-white md:text:5xl sm:2xl">
              Meet The Team
            </h1>
            <h1 className="font-bold text-5xl text-yellow md:text:5xl sm:2xl">
              A-Team
            </h1>
          </div>
          <p className="text-left text-light-gray mb-4 uppercase tracking-widest">
            hello world
          </p>
          <p className="text-justify text-light-gray leading-6">
            Crypto Decius is much more than a mere trading platform; it's a
            vibrant community where passionate traders and investors come
            together to master the art of cryptocurrency trading. Guided by
            expert strategies and a results-oriented approach, we're on a
            mission to cultivate the next wave of trading talent. What sets us
            apart are our strategies for Long-term Buys, all endorsed by
            renowned industry leaders such as Binance, Bybit, and TradingView.
            At Crypto Decius, we're not just about trading; we're dedicated to
            helping you achieve your financial aspirations. Embark on this
            thrilling journey with us, embrace the expertise that comes with our
            VIP membership, and transform your trading experience. Join us and
            unlock the true potential of expert-guided cryptocurrency trading.
          </p>
        </div>
      </div>

      <div
        className="py-16 bg-gradient-to-b from-dark-blue via-dark-blue to-[#1e1726] px-4"
        id="team-cards"
      >
        <div className="container mx-auto grid md:grid-cols-3 gap-16 sm:grid-cols-1">
          <div className="bg-[#302436] border-[1px] border-solid border-white border-opacity-20 h-96 rounded-3xl shadow-2xl hover:shadow-[#803efb90] duration-300 grid grid-rows-3 grid-cols-1 overflow-hidden ">
            <div className="row-span-2 bg-[url(src/assets/team1.webp)] bg-cover bg-no-repeat">
              <div className="w-full h-full bg-gradient-to-b from-dark-blue to-transparent">
                <h1 className="text-white font-semibold relative top-6 left-6 text-">
                  Meet Our Team
                </h1>
              </div>
            </div>
            <div className="row-span-1 py-3 px-4 flex flex-col justify-center">
              <h1 className="text-white font-semibold mb-2">More hello</h1>
              <p className="text-xs text-justify text-light-gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                sequi illo, at unde, iste totam quas harum, ullam in qui tempore
                minus.
              </p>
            </div>
          </div>
          <div className="bg-[#302436] border-[1px] border-solid border-white border-opacity-20 h-96 rounded-3xl shadow-2xl hover:shadow-[#803efb90] duration-300 grid grid-rows-3 grid-cols-1 overflow-hidden ">
            <div className="row-span-2 bg-[url(src/assets/team2.webp)] bg-cover bg-no-repeat">
              <div className="w-full h-full bg-gradient-to-b from-dark-blue to-transparent">
                <h1 className="text-white font-semibold relative top-6 left-6">
                  Talent
                </h1>
              </div>
            </div>
            <div className="row-span-1 py-3 px-4 flex flex-col justify-center">
              <h1 className="text-white font-semibold mb-2">Talent</h1>
              <p className="text-xs text-justify text-light-gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                sequi illo, at unde, iste totam quas harum, ullam in qui tempore
                minus.
              </p>
            </div>
          </div>
          <div className="bg-[#302436] border-[1px] border-solid border-white border-opacity-20 h-96 rounded-3xl shadow-2xl hover:shadow-[#803efb90] duration-300 grid grid-rows-3 grid-cols-1 overflow-hidden ">
            <div className="row-span-2 bg-[url(src/assets/team3.webp)] bg-cover bg-no-repeat bg-center">
              <div className="w-full h-full bg-gradient-to-b from-dark-blue to-transparent">
                <h1 className="text-white font-semibold relative top-6 left-6">
                  Join Our Community
                </h1>
              </div>
            </div>
            <div className="row-span-1 py-3 px-4 flex flex-col justify-center">
              <h1 className="text-white font-semibold mb-2">
                Join Our Community
              </h1>
              <p className="text-xs text-justify text-light-gray">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                sequi illo, at unde, iste totam quas harum, ullam in qui tempore
                minus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
