import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa';

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

    // Simulate form submission (or replace this with actual API integration later)
    console.log('Form Submitted', formData);
    setFormStatus('Your message has been sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-dark-background text-dark-text min-h-screen p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-dark-card p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
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
                  className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text focus:ring-2 focus:ring-dark-accent focus:outline-none shadow-md"
                  placeholder="Your Name"
                />
              </div>
              <div>
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
                  className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text focus:ring-2 focus:ring-dark-accent focus:outline-none shadow-md"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 text-dark-accent">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text focus:ring-2 focus:ring-dark-accent focus:outline-none shadow-md"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-accent text-dark-text py-3 rounded-lg hover:bg-dark-accentHover transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
            {formStatus && (
              <p className="mt-4 text-center text-green-500 font-medium animate-fade-in">
                {formStatus}
              </p>
            )}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold text-dark-accent">Other Ways to Connect</h2>
            <p className="text-dark-textSecondary">
              Feel free to reach out through any of the channels below.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-dark-accent text-2xl" />
                <a
                  href="mailto:anterozacarias007@gmail.com"
                  className="text-dark-text hover:underline"
                >
                  anterozacarias007@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-dark-accent text-2xl" />
                <a
                  href="https://www.linkedin.com/in/zacarias-antero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-text hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-dark-accent text-2xl" />
                <span className="text-dark-text">+27 640 977 470</span>
                <span className="text-dark-text"> |  +244 972 700 502</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
