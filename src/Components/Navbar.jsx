import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUpgradeDropdownOpen, setIsUpgradeDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0b0f1c] backdrop-blur-md shadow-lg font-poppins">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        {/* Logo Section */}
        <Link to="HomePage.jsx" className="flex items-center">
          <img src="Logo1.png" alt="HIRED Logo" className="w-[330px] h-40 mt-8 -ml-24" />
          {/* <span className="text-2xl font-bold text-white tracking-wide">HIRED</span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-16 items-center text-base font-medium">
          <Link to="" className="text-white hover:text-purple-400 transition duration-200">Home</Link>
          <Link to="/aboutus" className="text-white hover:text-purple-400 transition duration-200">About Us</Link>
          <Link to="/upgrade" className="text-white hover:text-purple-400 transition duration-200">Upgrade</Link>
          <Link 
              to="/ContactUs" 
              className="text-white hover:text-purple-400 transition duration-200  hover:border-purple-400">
              Contact Us
          </Link>

          {/* Upgrade Dropdown */}
          <div className="relative">
            <button
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:from-purple-600 hover:to-pink-600 transition duration-200 flex items-center space-x-1"
              onClick={() => setIsUpgradeDropdownOpen(!isUpgradeDropdownOpen)}>
              <span>Sign Up</span>
              <svg
                className="w-5 h-5 text-purple-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isUpgradeDropdownOpen && (
              <div className="absolute mt-2 w-28 bg-[#0b0f1c] rounded-md shadow-lg z-50 ">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-200"
                      onClick={() => setIsUpgradeDropdownOpen(false)}>
                      Candidates
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signupcompany"
                      className="block px-4 py-2 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition duration-200"
                      onClick={() => setIsUpgradeDropdownOpen(false)}>
                      Companies
                    </Link>
                  </li>
                </ul>
            </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-purple-400 transition duration-200 focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#0b0f1c] shadow-md">
          <ul className="flex flex-col items-center py-6 space-y-6">
            <li>
              <Link
                to="/"
                className="text-white hover:text-purple-400 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-purple-400 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <button
                className="text-purple-400 hover:text-purple-300 transition duration-200 flex items-center"
                onClick={() => setIsUpgradeDropdownOpen(!isUpgradeDropdownOpen)}
              >
                <span>Upgrade</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isUpgradeDropdownOpen && (
                <div className="mt-2 bg-[#0d1221] rounded-md shadow-lg">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/upgrade/candidates"
                        className="block px-4 py-2 text-sm text-white hover:bg-purple-500 hover:text-white transition duration-200"
                        onClick={() => {
                          setIsUpgradeDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Candidates
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/upgrade/companies"
                        className="block px-4 py-2 text-sm text-white hover:bg-purple-500 hover:text-white transition duration-200"
                        onClick={() => {
                          setIsUpgradeDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        Companies
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-purple-400 transition duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
