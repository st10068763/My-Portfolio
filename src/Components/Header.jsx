import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';
import logo from '../Assets/images/logo-removebg.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', name: 'Home', icon: <FaHome className="md:hidden" /> },
    { path: '/about', name: 'About', icon: <FaUser className="md:hidden" /> },
    { path: '/projects', name: 'Projects', icon: <FaCode className="md:hidden" /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope className="md:hidden" /> }
  ];

  // Animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    }
  };

  const navItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <motion.header 
      className="bg-dark-background shadow-md sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Updated with your logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/" className="flex items-center gap-2">
            {/* Replace with your logo image */}
            <img 
              src={logo} 
              alt="Zacarias Logo" 
              className="h-10 w-auto" // Adjust height as needed
            />
            {/* Optional: Keep text logo or remove it */}
            <span className="text-2xl font-bold text-dark-accent hidden md:block">
              Zacarias Antero
            </span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link
                to={item.path}
                className="text-dark-text hover:text-dark-accent transition duration-300 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-dark-card"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="block md:hidden text-dark-text focus:outline-none p-2 rounded-lg hover:bg-dark-card"
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-dark-card shadow-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col space-y-2 py-4 px-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  variants={navItemVariants}
                  custom={index}
                >
                  <Link
                    to={item.path}
                    className="text-dark-text hover:text-dark-accent transition duration-300 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-dark-background/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;