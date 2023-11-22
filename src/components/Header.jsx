// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-dark-blue p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-white text-lg font-bold">
          <img src="public/assets/logo.svg" className="max-w-32 max-h-12" alt="Crypto Decius logo" />
        </Link>

        {/* Responsive Navigation Menu on the right */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/signals">SIGNALS</NavLink>
          <NavLink to="/coaching">COACHING</NavLink>
          <NavLink to="/results">RESULTS</NavLink>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-green px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </Link>
);

export default Header;
