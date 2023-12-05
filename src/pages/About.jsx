// src/pages/About.jsx
import React from "react";
import Team from "../components/Team";

const About = () => {
  return (
    <div
      id="about"
      className="text-white text-center py-16 bg-main bg-no-repeat bg-cover font-Montserrat"
    >
      <div className="mx-auto container">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-8 text-center">
          About <span className="text-light-blue">Crypto Decius...</span>
        </h1>
        <p className="text-center mb-8 uppercase text-light-gray font-medium tracking-widest">
          WHO ARE WE? WHAT DO WE DO? WHY DO WE DO IT?
        </p>
        <div className="flex flex-col items-center justify-center mb-12">
          <img
            src="/assets/pro-display.png" // Replace with your image path
            alt="About Us"
            className="w-[80%]"
          />
          <h2 className="text-3xl font-bold text-light-gray mb-2">About Us</h2>
          <p className="text-lg text-light-gray text-center">
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

        <div>
          <Team />
        </div>

        {/* Mission and Values Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-light-gray mb-4">
            Mission and Values
          </h3>
          <p className="text-light-gray">
            At Crypto Decius, our mission is clear — to democratize access to
            expert cryptocurrency trading guidance. We believe in fostering a
            community where traders of all levels can thrive. Our values center
            around transparency, continuous learning, and a commitment to
            delivering results. We strive to provide a platform where members
            can gain the knowledge and skills needed for success in the
            ever-evolving crypto markets. By upholding these values, we aim to
            be a driving force behind the success stories of our community
            members.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-light-gray mb-4">
            Contact Us
          </h3>
          <p className="text-light-gray">
            Have questions or feedback? We'd love to hear from you! Feel free to
            reach out to us with any inquiries, suggestions, or partnership
            opportunities. Your input is valuable, and we are here to assist you
            on your trading journey. You can contact us via email at
            [your-email@example.com] or use the form on our Contact page. We
            look forward to connecting with you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
