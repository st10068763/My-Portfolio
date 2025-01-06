import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-card text-dark-textSecondary py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/zacarias-antero/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-textSecondary hover:text-dark-accent transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/st10068763"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark-textSecondary hover:text-dark-accent transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        
          <a
            href="mailto:anterozacarias007@gmail.com"
            className="text-dark-textSecondary hover:text-dark-accent transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright and Info */}
        <p className="text-sm">
          © {new Date().getFullYear()} Zacarias Antero. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
