import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/contact.css'; // Import the CSS file for this page
import Footer from '../components/footer'; // Import the Footer component
import Navbar from '../components/navBar';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Send Message</button>
        </form>
      </div>

      <div className="accent-div"></div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactPage;
