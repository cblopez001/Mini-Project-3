// CommunityPage.jsx
import React from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/community.css'; // Import the CSS file for this page
import Footer from '../components/Footer'; // Import the Footer component
import Navbar from '../components/Navbar';

import './CommunityPage.css'; // Import your custom CSS file for styling
import { FaDiscord, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const CommunityPage = () => {
  return (
    <div className="community-page">
              {/* Navigation */}
      <Navbar />
      {/* Discord Section */}
      <section className="community-section discord-section">
        <h2>Join Our Community on Discord</h2>
        <p>Connect with other listeners, discuss episodes, and get exclusive behind-the-scenes content by joining our Discord server!</p>
        <a
          href="https://discord.gg/your-discord-link" // Replace with your Discord server link
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button"
        >
          <FaDiscord className="icon" /> Join Our Discord
        </a>
      </section>

      {/* Social Media Section */}
      <section className="community-section social-media-section">
        <h2>Follow Us on Social Media</h2>
        <p>Stay up to date with the latest podcast news, highlights, and more by following us on social media!</p>
        <div className="social-buttons">
          <a
            href="https://instagram.com/your-instagram" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="social-button instagram"
          >
            <FaInstagram className="icon" /> Instagram
          </a>
          <a
            href="https://facebook.com/your-facebook" // Replace with your Facebook link
            target="_blank"
            rel="noopener noreferrer"
            className="social-button facebook"
          >
            <FaFacebook className="icon" /> Facebook
          </a>
          <a
            href="https://youtube.com/your-youtube" // Replace with your YouTube link
            target="_blank"
            rel="noopener noreferrer"
            className="social-button youtube"
          >
            <FaYoutube className="icon" /> YouTube
          </a>
        </div>
      </section>
            {/* Footer */}
            <Footer />
    </div>
  );
};

export default CommunityPage;
