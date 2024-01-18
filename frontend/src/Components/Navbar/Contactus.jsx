// ContactUs.jsx

import React from 'react';
import './Contactus.css'; // Create this CSS file for styling
import imagex from '../../assets/support-303213_1280-removebg-preview.png'
const Contactus = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can use state or any state management library to manage form data
  };

  return (
    <div className='fullcover'>
    <div className="contact-container">
      <div className="form-container">
        <h2 className='lala'>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="image-container">
        {/* Add your image source here */}
        <img src={imagex} alt="Contact Us Image" />
      </div>
    </div>
    </div>
  );
};

export default Contactus;
