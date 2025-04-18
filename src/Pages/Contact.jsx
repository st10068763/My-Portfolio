import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaPhone, FaPaperPlane } from 'react-icons/fa';
import Footer from '../Components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Submitted', formData);
    setFormStatus('Your message has been sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-dark-background text-dark-text min-h-screen flex flex-col">
      <div className="flex-grow p-6">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Get in Touch
          </motion.h1>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="bg-dark-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-dark-accent">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text focus:ring-2 focus:ring-dark-accent focus:outline-none shadow-md transition"
                    placeholder="Your Name"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-dark-accent">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text focus:ring-2 focus:ring-dark-accent focus:outline-none shadow-md transition"
                    placeholder="Your Email"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-dark-accent">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text focus:ring-2 focus:ring-dark-accent focus:outline-none shadow-md transition"
                    placeholder="Your Message"
                    rows="5"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-dark-accent text-dark-text py-3 rounded-lg hover:bg-dark-accentHover transition duration-300 shadow-md flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </motion.button>
              </form>
              
              {formStatus && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center text-green-500 font-medium"
                >
                  {formStatus}
                </motion.p>
              )}
            </motion.div>

            {/* Contact Details */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col space-y-8"
            >
              <motion.h2 
                className="text-3xl font-bold text-dark-accent"
                variants={itemVariants}
              >
                Other Ways to Connect
              </motion.h2>
              
              <motion.p 
                className="text-dark-textSecondary"
                variants={itemVariants}
              >
                Feel free to reach out through any of the channels below.
              </motion.p>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
              >
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-dark-background/50 rounded-lg hover:bg-dark-background/70 transition"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-dark-accent/10 rounded-full text-dark-accent">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <a
                    href="mailto:anterozacarias007@gmail.com"
                    className="text-dark-text hover:underline"
                  >
                    anterozacarias007@gmail.com
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-dark-background/50 rounded-lg hover:bg-dark-background/70 transition"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-dark-accent/10 rounded-full text-dark-accent">
                    <FaLinkedin className="text-xl" />
                  </div>
                  <a
                    href="https://www.linkedin.com/in/zacarias-antero/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-text hover:underline"
                  >
                    LinkedIn Profile
                  </a>
                </motion.div>
                
                <motion.div 
                  className="flex flex-col space-y-4 p-4 bg-dark-background/50 rounded-lg hover:bg-dark-background/70 transition"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-dark-accent/10 rounded-full text-dark-accent">
                      <FaPhone className="text-xl" />
                    </div>
                    <span className="text-dark-text">Contact Numbers:</span>
                  </div>
                  <div className="flex flex-wrap gap-4 pl-16">
                    <span className="text-dark-text">+27 640 977 470</span>
                    <span className="text-dark-text">+244 972 700 502</span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;