// src/components/Faq.jsx
import React, { useState } from 'react';

const Faq = () => {
  const faqItems = [
    { question: 'How does it work?', answer: 'Once you purchase a plan for our all-inclusive membership and your membership is verified, you will get access to the VIP section of our Telegram where we provide automated trading signals and daily technical analysis.' },
    { question: 'What markets can I use?', answer: 'Crypto Decius works on any market internationally including spot and futures as well. We will provide you with setups made for scalping, swing trading, or even long term investing. The services we provide are fully customizable and can fit any style of discretionary trading.' },
    { question: 'Can I win every trade?', answer: 'Absolutely not. There is no magic solution or "algorithm" to give you the power to predict markets with a guaranteed % accuracy. We provide simplified trading signals that are designed for discretionary trading, not to be followed blindly. ' },
    { question: 'Is it beginner-friendly?', answer: 'Yes, if you are new to trading you can certainly use our signals with ease. We have many easy to follow tutorials &amp; guides for you to use as a beginner and get you started out on the right track.' },
    { question: 'How can I sign up?', answer: 'In order to sign up for our VIP service head to our Telegram Group and launch the Crypto Decius Bot. The bot will guide you through the whole process. ' },
    { question: 'Can I pay by crypto?', answer: 'Yes, we currently accept BNB, BTC, LTC, BUSD &amp; USDT.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container max-w-5xl mx-auto py-16">
      <h1 className="text-5xl font-bold text-center mb-8">
        <span className="text-purple">FAQ!</span> Need help?
      </h1>
      <p className="text-center mb-16 uppercase text-p-gray font-medium tracking-widest">
            If you've made it this far, there's a high chance you're interested
            in our product but are not yet convinced.&nbsp;This section is to
            clear things up.
          </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {faqItems.map((item, index) => (
          <div key={index} className="relative py-8 px-8 flex flex-col justify-between item-center w-full h-full rounded-3xl border-light-gray border-[1px] border-opacity-10 shadow-md">
            <button
              className="flex items-center justify-between text-black w-full"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-2xl font-semibold">{item.question}</span>
              <span className="text-2xl text-white font-medium bg-purple w-8 h-8 flex items-center justify-center rounded-full">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden max-h-0 transition-max-h duration-300 ${
                openIndex === index ? 'max-h-full' : ''
              }`}
            >
              <div className="p-4 rounded-md shadow-md">
                <p className="text-p-gray text-justify">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
