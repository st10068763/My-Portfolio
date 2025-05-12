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

    const [formStatus, setFormStatus] = useState({
    message: '',
    isSuccess: false,
    isError: false
    });
  
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: '', isSuccess: false, isError: false });

    try {
      const response = await fetch('https://formsubmit.co/ajax/anterozacarias007@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New Contact Form Submission',
          _template: 'table', // Makes the email look nicer
          _captcha: 'false' // Disables captcha for testing
        })
      });
      const data = await response.json();
      
      if (data.success === "true") {
        setFormStatus({
          message: 'Your message has been sent successfully! Thank you for reaching out.',
          isSuccess: true,
          isError: false
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({
        message: 'There was an error sending your message. Please try again later or contact me directly.',
        isSuccess: false,
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <input 
                  type="hidden" 
                  name="_next" 
                  value="https://yourdomain.com/thank-you" 
                />
                <input 
                  type="hidden" 
                  name="_autoresponse" 
                  value="Thank you for contacting me! I'll get back to you soon." 
                />
                
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
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-dark-accent/70' : 'bg-dark-accent'} text-dark-text py-3 rounded-lg hover:bg-dark-accentHover transition duration-300 shadow-md flex items-center justify-center gap-2`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
              
              {formStatus.message && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`mt-4 text-center font-medium ${
                    formStatus.isSuccess ? 'text-green-500' : 
                    formStatus.isError ? 'text-red-500' : 'text-dark-text'
                  }`}
                >
                  {formStatus.message}
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