// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const cartCount = 2; // Replace with dynamic cart count
  const menuItems = ['Home', 'Menu', 'Orders', 'Contact'];

  return (
    <nav className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 shadow-md">
      <div className="max-w-12xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Left: Logo & Brand */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-14 h-14" />
            <span className="text-xl font-bold text-white">HOT DROP !!!</span>
          </div>

          {/* Desktop Nav + Search */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative text-white font-bold text-lg group flex items-center space-x-1"
              >
                <span>{item}</span>
                {/* Add cart icon for Orders */}
                {item === 'Orders' && (
                  <span className="relative text-white text-xl">
                    <AiOutlineShoppingCart />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-3 bg-yellow-300 text-red-600 text-xs font-bold rounded-full px-1">
                        {cartCount}
                      </span>
                    )}
                  </span>
                )}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Search Bar */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search a dish..."
                className="w-48 md:w-64 bg-white bg-opacity-80 placeholder-gray-600 text-gray-800 text-base rounded-full pl-4 pr-12 py-2 focus:outline-none focus:bg-opacity-100 transition-all duration-300 focus:w-80"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l4 4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Sign In / Sign Up */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/signin"
              className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-pink-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-white text-red-600 px-4 py-2 rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-pink-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gradient-to-b from-orange-400 via-red-500 to-pink-500 px-4 py-4 space-y-4 transition-all duration-300 ease-in-out">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block text-white text-lg font-bold hover:pl-2 transition-all duration-300 flex items-center justify-between"
              onClick={() => setNavOpen(false)}
            >
              <span>{item}</span>
              {item === 'Orders' && (
                <span className="relative text-white text-xl">
                  <AiOutlineShoppingCart />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-yellow-300 text-red-600 text-xs font-bold rounded-full px-1">
                      {cartCount}
                    </span>
                  )}
                </span>
              )}
            </Link>
          ))}

          {/* Mobile Sign In / Sign Up */}
          <div className="flex space-x-3 pt-2">
            <Link
              to="/signin"
              className="flex-1 bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:scale-105 transition-all"
              onClick={() => setNavOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="flex-1 bg-white text-red-600 px-4 py-2 rounded-md font-semibold hover:scale-105 transition-all"
              onClick={() => setNavOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
