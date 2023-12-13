// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-dark-blue p-4 w-full font-Montserrat">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/" className="text-white text-lg font-bold">
          <img
            src="/assets/logo.svg"
            className="max-w-32 max-h-12"
            alt="Crypto Decius logo"
          />
        </Link>

        {/* Responsive Navigation Menu on the right */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/coaching">COACHING</NavLink>
          <NavLink to="/results">RESULTS</NavLink>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden relative">
          <button className="text-white" onClick={toggleMobileMenu}>
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

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div
              className={`fixed z-20 top-0 h-screen w-full bg-dark-blue p-4 space-y-4 transform duration-300 transition-transform flex flex-col justify-center items-center ${
                isMobileMenuOpen ? "right-0" : "right-full"
              }`}
            >
              {/* Close Button */}
              <button
                className="text-white absolute top-6 right-4"
                onClick={toggleMobileMenu}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
              <DropdownLink to="/" onClick={toggleMobileMenu}>
                HOME
              </DropdownLink>
              <DropdownLink to="/about" onClick={toggleMobileMenu}>
                ABOUT
              </DropdownLink>
              <DropdownLink to="/coaching" onClick={toggleMobileMenu}>
                COACHING
              </DropdownLink>
              <DropdownLink to="/results" onClick={toggleMobileMenu}>
                RESULTS
              </DropdownLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// NavLink component for consistent styling
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-white hover:text-yellow duration-150 px-3 py-2 rounded-md text-sm font-semibold"
  >
    {children}
  </Link>
);

// DropdownLink for mobile menu items
const DropdownLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-white hover:text-yellow duration-150 px-3 py-2 rounded-md text-3xl font-medium"
  >
    {children}
  </Link>
);

export default Header;
