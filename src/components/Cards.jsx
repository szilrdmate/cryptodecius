// src/components/Cards.jsx
import React, { useEffect, useRef } from 'react';
import './Cards.css'

const Pricing = () => {
  const cardsContainer = useRef(null);
  const cardsContainerInner = useRef(null);
  const cards = useRef([]);
  const overlay = useRef(null);

  useEffect(() => {
    const applyOverlayMask = (e) => {
      const overlayEl = overlay.current;
      const x = e.pageX - cardsContainer.current.offsetLeft;
      const y = e.pageY - cardsContainer.current.offsetTop;

      overlayEl.style.setProperty('--opacity', '1');
      overlayEl.style.setProperty('--x', `${x}px`);
      overlayEl.style.setProperty('--y', `${y}px`);
    };

    const createOverlayCta = (overlayCard, ctaEl) => {
      const overlayCta = document.createElement("div");
      overlayCta.classList.add("cta");
      overlayCta.textContent = ctaEl.textContent;
      overlayCta.setAttribute("aria-hidden", true);
      overlayCard.append(overlayCta);
    };

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = cards.current.indexOf(entry.target);
        let width = entry.borderBoxSize[0].inlineSize;
        let height = entry.borderBoxSize[0].blockSize;

        if (cardIndex >= 0) {
          overlay.current.children[cardIndex].style.width = `${width}px`;
          overlay.current.children[cardIndex].style.height = `${height}px`;
        }
      });
    });

    const initOverlayCard = (cardEl) => {
      const overlayCard = document.createElement("div");
      overlayCard.classList.add("card");
      createOverlayCta(overlayCard, cardEl.lastElementChild);
      overlay.current.append(overlayCard);
      observer.observe(cardEl);
    };

    cards.current = Array.from(cardsContainerInner.current.querySelectorAll(".card"));
    cards.current.forEach(initOverlayCard);
    document.body.addEventListener("pointermove", applyOverlayMask);

    return () => {
      document.body.removeEventListener("pointermove", applyOverlayMask);
    };
  }, []);

  return (
    <div className="main flow">
      <h1 className="main__heading text-center font-bold text-5xl md:text-5xl sm:text-4xl mb-8 text-white">Pricing</h1>
      <p className="text-center mb-8 uppercase text-light-gray font-medium tracking-widest">
            CHOOSE A PACKAGE THAT SUITS YOUR NEEDS!
          </p>
      <div className="main__cards cards" ref={cardsContainer}>
        <div className="cards__inner" ref={cardsContainerInner}>
          <div className="cards__card card">
            <p className="card__heading">Yearly</p>
            <p className="card__price">&#36; 498.99</p>
            <ul role="list" className="card__bullets flow space-y-5">
              <li>Live VIP Signals</li>
              <li>Market Insights</li>
              <li>Technical Analysis</li>
              <li>24/7 Priority Support</li>
              <li>10x Alerts</li>
              <li>Long-term Buys</li>
            </ul>
            <a href="#starter" className="card__cta cta">Get Started</a>
          </div>

          <div className="cards__card card">
            <p className="card__heading">Monthly</p>
            <p className="card__price">&#36; 58.99</p>
            <ul role="list" className="card__bullets flow space-y-5">
              <li>Live VIP Signals</li>
              <li>Market Insights</li>
              <li>Technical Analysis</li>
              <li>Finance News</li>
              <li>10x Alerts</li>
            </ul>
            <a href="#pro" className="card__cta cta">Upgrade to Pro</a>
          </div>

          <div className="cards__card card">
            <p className="card__heading">Quarterly</p>
            <p className="card__price">&#36; 148.99</p>
            <ul role="list" className="card__bullets flow space-y-5">
              <li>Live VIP Signals</li>
              <li>Market Insightst</li>
              <li>Technical Analysis</li>
              <li>24/7 Support</li>
              <li>10x Alerts</li>
            </ul>
            <a href="#enterprise" className="card__cta cta">Go Ultimate</a>
          </div>
        </div>

        <div className="overlay cards__inner" ref={overlay}></div>
      </div>
    </div>
  );
};

export default Pricing;
