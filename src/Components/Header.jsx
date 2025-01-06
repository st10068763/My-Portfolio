import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
