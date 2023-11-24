// src/components/Cards.jsx
import React from 'react';
import './FloatingPackageCards.css'; // Import the CSS file for styling

const FloatingPackageCards = () => {
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll('.package-card');

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const mouseX = e.clientX - cardRect.left;
      const mouseY = e.clientY - cardRect.top;

      const gradientX = (mouseX / cardRect.width) * 100;
      const gradientY = (mouseY / cardRect.height) * 100;

      card.style.background = `radial-gradient(at ${gradientX}% ${gradientY}%, #4a3aff, #0c0d14)`;
    });
  };

  const handleMouseLeave = () => {
    const cards = document.querySelectorAll('.package-card');

    cards.forEach((card) => {
      card.style.background = 'transparent';
    });
  };

  return (
    <div className="package-cards-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="package-card tier-one">
        <h2>Tier One</h2>
        <p>Basic Package Features</p>
        <button>Select</button>
      </div>
      <div className="package-card tier-two">
        <h2>Tier Two</h2>
        <p>Intermediate Package Features</p>
        <button>Select</button>
      </div>
      <div className="package-card tier-three">
        <h2>Tier Three</h2>
        <p>Advanced Package Features</p>
        <button>Select</button>
      </div>
    </div>
  );
};

export default FloatingPackageCards;
