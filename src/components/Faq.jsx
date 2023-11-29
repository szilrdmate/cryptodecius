// src/components/Faq.jsx
import React, { useState } from 'react';

const Faq = () => {
  const faqItems = [
    { question: 'How does it work', answer: 'Crypto Decius is...' },
    { question: 'What markets can I use?', answer: 'To get started...' },
    { question: 'Can I win every trade?', answer: 'Yes, we offer coaching...' },
    { question: 'Is it beginner-friendly?', answer: 'We offer three plans...' },
    { question: 'How can I sign up?', answer: 'Yes, we offer a free trial...' },
    { question: 'Can I pay by crypto?', answer: 'You can contact support...' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="container mx-auto py-16">
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
                <p className="text-p-gray">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
