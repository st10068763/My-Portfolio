import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/zacarias-antero/",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]"
    },
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/st10068763",
      label: "GitHub",
      color: "hover:text-[#333] dark:hover:text-[#f5f5f5]"
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:anterozacarias007@gmail.com",
      label: "Email",
      color: "hover:text-[#EA4335]"
    }
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-dark-card text-dark-textSecondary py-8 border-t border-dark-background"
    >
      <div className="container mx-auto px-6">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-8 mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-dark-textSecondary ${link.color} transition duration-300 p-2 rounded-full`}
              aria-label={link.label}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ 
                y: -3,
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright and Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-sm mb-2">
            Designed & built with <FaHeart className="inline text-red-500 mx-1" /> by Zacarias Antero
          </p>
          <p className="text-xs opacity-80">
            © {new Date().getFullYear()} Zacarias Antero. All rights reserved.
          </p>
        </motion.div>

        {/* Back to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <motion.a
            href="#top"
            className="inline-block text-xs bg-dark-background text-dark-text px-4 py-2 rounded-full hover:bg-dark-accent transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;