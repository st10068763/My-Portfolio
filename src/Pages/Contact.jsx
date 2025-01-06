import React, { useState } from 'react';

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
    // Simulate form submission (replace with your backend/API integration if needed)
    console.log('Form Submitted', formData);
    setFormStatus('Your message has been sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="mb-4">
        Have questions or want to work together? Feel free to get in touch via the form below or connect with me on LinkedIn.
      </p>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Send Message
        </button>
      </form>
      {formStatus && <p className="mt-4 text-green-600">{formStatus}</p>}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Other Ways to Connect</h2>
        <p className="mt-2">
          Email: <a href="mailto:anterozacarias007@gmail.com" className="text-blue-600">anterozacarias007@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/zacarias-antero/" target="_blank" rel="noopener noreferrer" className="text-blue-600">View Profile</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
