// src/components/Calendly.jsx
import React, { useEffect, useState } from "react";

const Calendly = () => {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-2 gap-4 p-8 border border-solid border-light-gray border-opacity-20 rounded-2xl shadow-lg bg-[#fff] h-[630px] overflow-hidden">
      <div className="p-4">
        <div className="calendly-inline-widget" data-url="https://calendly.com/cryptodecius/coaching-demo-call?hide_event_type_details=1&hide_gdpr_banner=1" style={{ height: '630px' }}></div>
      </div>
      <div className="md:col-span-1">
        <div className="py-4">
          <h1 className="text-4xl font-bold mb-4 md:text-center md:mb-8 text-purple">
            Who do we recommend coaching for?
          </h1>
          <ul className="list-image-[url(src/assets/check.svg)] space-y-8 text-xl ml-24">
            <li>Begginner & Intermediate Traders</li>
            <li>Looking to Learn More</li>
            <li>Crypto Enthusiasts</li>
            <li>NFT Project Owners</li>
            <li>Crypto Influencers</li>
            <li>Blockchain Developers</li>
            <li>Entrepreneurs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calendly;
