import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-dark-background shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-dark-accent">
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-dark-text hover:text-dark-accent transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-dark-text hover:text-dark-accent transition duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-dark-text hover:text-dark-accent transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-dark-text hover:text-dark-accent transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-dark-text focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-card shadow-md">
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <Link
              to="/"
              className="text-dark-text hover:text-dark-accent transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-dark-text hover:text-dark-accent transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-dark-text hover:text-dark-accent transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-dark-text hover:text-dark-accent transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
