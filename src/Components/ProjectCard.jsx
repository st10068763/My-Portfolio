import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-200 dark:border-dark-card rounded-lg shadow-lg overflow-hidden bg-white dark:bg-dark-background hover:shadow-xl transition-all duration-300 flex flex-col"
      style={{ minHeight: '400px', maxHeight: '500px' }} // Set reasonable min/max heights
    >
      {/* Image container with fixed aspect ratio */}
      <div className="relative pt-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
          />
        </motion.div>
      </div>
      
      {/* Content container with flex-grow */}
      <div className="p-6 flex flex-col flex-grow">
        <motion.h3 
          whileHover={{ color: '#3b82f6' }}
          className="text-xl font-bold mb-3 text-gray-800 dark:text-dark-text"
        >
          {title}
        </motion.h3>
        
        {/* Scrollable description */}
        <div className="flex-grow overflow-y-auto mb-4">
          <p className="text-gray-600 dark:text-dark-textSecondary">
            {description}
          </p>
        </div>
        
        {/* Link at bottom */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 3 }}
          className="inline-flex items-center text-blue-500 dark:text-dark-accent font-medium mt-auto"
        >
          View Project
          <FaExternalLinkAlt className="ml-2" size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;