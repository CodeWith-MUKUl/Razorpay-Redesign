"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const Navitem = [
    "Products",
    "Solutions",
    "Developers",
    "Resources",
    "Pricing",
    "Company",
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 w-full py-4 px-6 md:px-12 lg:px-20 border-b z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/30 backdrop-blur-md border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-xl md:text-2xl font-bold text-white">
            <span className="text-[#22004b]">Razor</span>pay
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {Navitem.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#22002b] hover:text-[#22004B] transition-colors duration-100"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-6 py-2 text-[#22002B] hover:text-[#22004B] transition-colors duration-200">
            Sign up
          </button>
          <button className="px-6 py-2 bg-[#22004B] text-white rounded-lg hover:bg-gray-700 border border-white/20 transition-all duration-200">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#22004b] focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-40 pt-20">
          <div className="flex flex-col items-center space-y-6 px-6">
            {Navitem.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xl text-gray-300 hover:text-white transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}

            <div className="flex flex-col items-center space-y-4 pt-6 w-full max-w-xs">
              <button className="w-full px-6 py-3 text-white hover:text-blue-400 transition-colors duration-200">
                Sign up
              </button>
              <button className="w-full px-6 py-3 bg-[#22004B] text-white rounded-lg hover:bg-gray-700 border border-white/20 transition-all duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
