// src/components/Footer.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    < div className="w-screen">
      <div className="bg-dark-blue flex justify-center align-middle mx-auto container py-8">
        <div id="footer" className="mx-auto">
          <p className="text-light-gray font-thin text-center mb-4 text-sm">
            Crypto Decius and all affiliated parties are not registered as financial advisors. This site &amp; the products &amp; services Crypto Decius offers are for educational purposes only and should not be construed as financial advice. You must be aware of the risks and be willing to bear any level of risk to invest in financial markets. Past performance is not necessarily indicative of future results. Crypto Decius and all individuals associated assume no responsibility for your trading results or investments.
          </p>
          <div className="flex justify-evenly underline text-sm font-thin">
            <a href="termsofservice.pdf" className="text-light-gray p-2" target="_blank" rel="noopener noreferrer">Terms of Service</a>
            <a href="privacypolicy.pdf" className="text-light-gray p-2" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="bg-purple text-white py-4 h-20 flex align-middle">
        <div className="container mx-auto flex justify-between items-center sm:mx-20">
          <div className="text-md">
            Copyright © 2023 Crypto Decius. All rights reserved.
          </div>
          <div className="social-media-block flex space-x-4">
            <a
              href="https://twitter.com/cryptodecius"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-block w-inline-block text-white"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://t.me/cryptodecius"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-block w-inline-block text-white"
            >
              <FontAwesomeIcon icon={faTelegram} size="lg" />
            </a>
            <a
              href="https://youtube.com/@cryptodecius"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-block w-inline-block text-white"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a
              href="https://instagram.com/cryptodecius"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link-block w-inline-block text-white"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
