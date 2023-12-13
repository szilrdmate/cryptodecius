// src/pages/Home.jsx
import React from 'react';
import { Link } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import Pricing from "../components/Cards";
import Faq from "../components/Faq";

const Home = () => {
  const packages = {
    tier1: [
      {
        id: 'starter',
        name: 'Yearly',
        price: '498.99',
        features: ['Live VIP Signals', 'Market Insights', 'Technical Analysis', '24/7 Priority Support', '10x Alerts', 'Long-term Buys'],
        cta: 'SIGN UP',
      },
    ],
    tier2: [
      {
        id: 'pro',
        name: 'Monthly',
        price: '58.99',
        features: ['Live VIP Signals', 'Market Insights', 'Technical Analysis', '24/7 Priority Support'],
        cta: 'SIGN UP',
      }
    ],
    tier3: [
      {
        id: 'enterprise',
        name: 'Quarterly',
        price: '148.99',
        features: ['Live VIP Signals', 'Market Insights', 'Technical Analysis', '24/7 Priority Support', '10x Alerts'],
        cta: 'SIGN UP',
      }
    ],
  };

  const youtubeLink = "https://www.youtube.com/embed/uZAjwrZJNG4?si=TTReYnRY0CDpOUyK"

  return (
    <div>
      <div
        id="landing"
        className="text-white px-4 py-24 bg-main bg-no-repeat bg-cover font-Montserrat"
      >
        <div className="mx-auto max-w-5xl">
          <div className=" max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-8">
              Crypto Trade Signals
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
                <div className=" uppercase bg-purple focus:outline-none focus:shadow-outline-yellow rounded-full px-10 py-5 text-2xl font-bold shadow-md">
                  <a href="#trading-group" className="w-full md:w-auto">
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
                    src="src/assets/binance.webp"
                    alt="Binance"
                    className="partner-img w-full h-auto"
                  />
                </div>
                <div className="partner">
                  <img
                    src="src/assets/bybit.webp"
                    alt="Bybit"
                    className="partner-img w-full h-auto"
                  />
                </div>
                <div className="partner">
                  <img
                    src="src/assets/tradingview.webp"
                    alt="TradingView"
                    className="partner-img w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="stats" className=" px-4 bg-tri bg-repeat-y bg-cover min-h-screen">
        <div className="max-w-5xl flex flex-col mx-auto py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-blue text-center mb-8">
            Join the <span className="text-purple">Fastest Growing</span>{" "}
            Trading Community!
          </h1>
          
          <VideoPlayer youtubeLink={youtubeLink} />

          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-dark-blue text-center mb-4">
            What is <span className="text-purple">CRYPTO DECIUS</span>
          </h1>
          <p className="text-center mb-8 uppercase text-p-gray font-medium tracking-widest">
            Navigating Markets with Expert Guidance and Results-Driven
            Strategies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-8">
            <div className="divers">
              <img
                src="src/assets/stats3.webp"
                alt="Statistics"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>

            <div className="intro-div flex flex-col text-justify justify-center">
              <h1 className="intro-heading text-4xl md:text-4xl font-bold mb-4 text-black">
                Expert Guidance
              </h1>
              <p className="mb-4 text-p-gray leading-loose">
                At Crypto Decius, we understand that trading in the
                cryptocurrency markets can be complex and challenging. That's
                why our team of experienced traders and analysts are dedicated
                to providing you with expert guidance every step of the way.
                From personalized coaching to ongoing mentorship, we are
                committed to helping you develop the skills and knowledge.
              </p>
              <a
                href="http://t.me/DeciusBot"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase text-center bg-purple text-white rounded-full w-full py-5 text-xl font-bold shadow-md"
              >
                Sign up for VIP
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="flex flex-col text-justify justify-center">
              <h1 className="intro-heading text-4xl md:text-4xl font-bold mb-4 text-black">
                Results
              </h1>
              <p className="mb-4 text-p-gray leading-loose">
                Our focus is on delivering results. We are committed to helping
                our members achieve their financial goals, whether that's
                building a portfolio, generating long-term wealth, or achieving
                financial independence. Our track record speaks for itself, with
                many of our members reporting significant gains in their trading
                portfolios.
              </p>
              <Link
                to="/results"
                className="uppercase text-center bg-purple text-white rounded-full w-full py-5 text-xl font-bold shadow-md">
                View Reports
              </Link>
            </div>

            <div className="divers">
              <img
                src="src/assets/stats.webp"
                alt="Statistics"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="trading-group" className="px-4 bg-r-blur bg-center bg-repeat-y bg-cover py-16">
        <div className="max-w-5xl flex flex-col mx-auto">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            VIP <span className="text-purple">Trading</span> Group
          </h1>
          <p className="text-center mb-8 uppercase text-light-gray font-medium tracking-widest">
            14 DAY MONEY BACK GUARANTEE. CANCEL ANYTIME IN ONE-CLICK
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="intro-div flex flex-col text-justify justify-center">
              <h1 className="intro-heading text-3xl md:text-4xl font-bold mb-4 text-yellow uppercase">
                How it works
              </h1>
              <p className="intro-para mb-4 text-light-gray leading-loose">
                Trade calls, also known as signals, are real-time instructions that provide you with a clear roadmap for buying and selling assets. With each signal, you'll receive steps on which coin to buy, the optimal price to enter the trade, the targets for selling it, and the critical stop-loss level to minimize your potential losses in case the trade doesn't go as planned.
              </p>
            </div>

            <div className="divers">
              <img
                src="src/assets/phone.webp"
                alt="Statistics"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="max-w-5xl mx-auto">
          < Pricing packages={packages}/>
          </div>
        </div>
      </div>

      <div id="faq" className="bg-white py-16 px-4">
          < Faq />
      </div>

      <div id="signup" className='px-4 bg-dark-blue py-16'>
        <div className='max-w-5xl flex flex-col items-center justify-evenly rounded-2xl bg-purple mx-auto py-16 h-80'>
          <div>
            <p className="text-center mb-4 uppercase text-light-blue font-medium tracking-widest">FREE TELEGRAM GROUP</p>
            <h1 className="text-center text-4xl md:text-4xl font-bold mb-12 text-white">Why not join our free Telegram group?</h1>
          </div>
          <div className=' hover:-translate-y-2 duration-300'>
            <a className="text-center py-4 px-8 rounded-2xl border-light-blue border-2 font-semibold text-lg text-white" href="https://t.me/cryptodecius/">Join our Telegram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
