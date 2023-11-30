import React from 'react';

const Calendly = () => {
    
  return (
    <div className="border-2 border-opacity-10 border-light-gray shadow-md p-16 grid grid-cols-2 grid-rows-1 rounded-3xl mx-auto max-w-5xl">
      <div className="div-block-23">
        <div className="calendly-inline-widget" data-url="https://calendly.com/cryptodecius/coaching-demo-call?hide_event_type_details=1&hide_gdpr_banner=1" style={{ minWidth: '320px', height: '700px' }}></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>

      <div className=''>
        <div className="deals">
          <h1 className="heading-20">Who do we recommend coaching for?</h1>
          <div className="recs">
            <img
              src="/public/assets/check.svg"  // Update the path accordingly
              alt="Checkmark Icon"
              className="tick-icon"
            />
            <div className="point">Beginner/Intermediate Traders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendly;
