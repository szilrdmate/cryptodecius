// src/pages/Coaching.jsx
import React from "react";
import Pricing from "../components/Cards"
import Calendly from "../components/Calendly";

const Coaching = () => {
  // Specifying packages for the cards section
  const packages = {
    tier1: [
      {
        id: 'starter',
        name: '1 Month Mentorship',
        price: '989.99',
        features: ['1 Month Runtime', 'Financial Advising', 'Technical Analysis', '24/7 Support', 'Case Studies'],
        cta: 'ENROLL',
      },
    ],
    tier2: [
      {
        id: 'pro',
        name: 'One-Time Session',
        price: '299.99',
        features: ['1 Time Session', 'Financial Advising', 'Technical Analysis'],
        cta: 'ENROLL',
      }
    ],
    tier3: [
      {
        id: 'enterprise',
        name: '6 Months Course',
        price: '4899.99',
        features: ['6 Month Runtime', 'Financial Advising', 'Technical Analysis', 'Personal Support Agent', 'Case Studies', 'Networking Events'],
        cta: 'ENROLL',
      }
    ],
  };

  return (
    <div>
      <div className="text-white py-16 bg-r-blur bg-no-repeat bg-cover font-Montserrat">
        <div className="mx-auto container">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-8 text-center">
            <span className="text-light-blue">Coaching</span> Program
          </h1>
          <p className="text-center mb-8 uppercase text-light-gray font-medium tracking-widest">
            WATCH A SHORT INTRODUCTION OF OUR COACHING SERVICE TO DETERMINE IF
            IT'S SOMETHING YOU WOULD BE INTERESTED IN
          </p>
          <div
            className="relative mb-16"
            style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/6-8oV3UTn5g?si=xk7wTE9F_RrnUk1c"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="container mx-auto">
          <Pricing packages={packages}/>
        </div>
      </div>

      <div id="calendly" className="bg-white text-black py-16">
        <div className="mx-auto container">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold tracking-widest mb-8 text-center">
            <span className="text-purple">Interested?</span> Schedule a Free
            call with us!
          </h1>
          <p className="text-center mb-8 uppercase text-light-gray font-medium tracking-widest">
            Schedule a free call with our team, so we can decide what would work
            best for you and how we could help you with our service.
          </p>
        </div>
        <Calendly />
      </div>
    </div>
  );
};

export default Coaching;
