import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/home.css'; // Import the CSS file for this page
import Footer from '../components/Footer'; // Import the Footer component
import Navbar from '../components/Navbar';

/* Import Font Awesome icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

/* Import images */
import episodeUpdateDemo from '../assets/images/landingPageImages/episodeUpdateDemo.png';
import merchCarouselImage from '../assets/images/landingPageImages/merchCarouselImage.png';
import subscribeCarouselImage from '../assets/images/landingPageImages/subscribeCarouselImage.png';
import shopButtonImage from '../assets/images/landingPageImages/shopButtonImage.png';

const HomePage = () => {
  const [formData, setFormData] = useState({ firstInitial: '', lastName: '', review: '', rating: '' });
  const [reviews, setReviews] = useState([]);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch reviews from the database on component mount
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.log('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Review submitted successfully');
        setFormData({ firstInitial: '', lastName: '', review: '', rating: '' }); // Clear the form
        const updatedReviews = await response.json();
        setReviews([...reviews, updatedReviews]);
      } else {
        console.log('Error submitting review');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Subscription successful!');
        setEmail(''); // Clear the email field after successful submission
      } else {
        setMessage('Error subscribing. Please try again.');
      }
    } catch (error) {
      setMessage('Error subscribing. Please try again.');
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FontAwesomeIcon
        key={index}
        icon={faStar}
        className={index < rating ? 'text-warning' : 'text-muted'} // Use text-warning for filled stars and text-muted for empty stars
      />
    ));
  };

  return (
    <div>

      {/* Accent Div */}
      <div className="carousel-accent-div"></div>

      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleInterval" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src={merchCarouselImage} className="d-block w-100" alt="Merch Carousel" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={subscribeCarouselImage} className="d-block w-100" alt="Subscribe Carousel" />
          </div>
          <div className="carousel-item">
            <img src={episodeUpdateDemo} className="d-block w-100" alt="Episode Update Demo" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="carousel-accent-div"></div>

      {/* Live and Episode Buttons */}
      <div className="link-container">
        <ul>
          <li>
            <div className="panel-wrapper">
              <Link to="/episodes">
                <img src={shopButtonImage} className="panel-img" alt="Episode List" />
                <div className="overlay">
                  <h3 className="panel-text">Episode List</h3>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="panel-wrapper">
              <Link to="/youtube">
                <img src={shopButtonImage} className="panel-img" alt="Live Show" />
                <div className="overlay">
                  <h3 className="panel-text">Live Show</h3>
                </div>
              </Link>
            </div>
          </li>
        </ul>
      </div>

      {/* Subscribe Section */}
      <div className="subscription-container">
        <div className="sub-email-container">
          <div className="email-message">
            <h1>NEWSLETTER</h1>
            <p>Never miss an episode. Sign up for our newsletter mailing list!</p>
          </div>
          <form className="email-form" onSubmit={handleNewsletterSubmit}>
            <div className="email-input">
              <i className="fa-regular fa-envelope"></i>
              <input
                className="ebox"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <button className="btn" type="submit">Subscribe</button>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
        <div className="sub-platform">
          <div className="sub-message">
            <h1>SUBSCRIBE</h1>
            <p>Subscribe on all platforms where the show is available!</p>
          </div>
          <div className="icon-links">
            <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-soundcloud"></i></a>
            <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-spotify"></i></a>
            <a href="https://www.apple.com/apple-podcasts/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-podcast"></i></a>
            <a href="https://rss.com/?gad_source=1&gclid=EAIaIQobChMIwJih9vS_hgMVCGdHAR3Y8QXPEAAYASAAEgJ0pfD_BwE" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-square-rss"></i></a>
          </div>
        </div>
      </div>


      {/* Reviews Section */}
      <div className="review-container">
        <div className="about-host">
          <h2>Listener Reviews</h2>
        </div>
      </div>
      <div className="listener-container review-carousel">
        {reviews.map((review, index) => (
          <div key={index} className="card">
            <div className="box front">
              <h2>{`${review.firstInitial} ${review.lastName}`}</h2>
              <div>{renderStars(review.rating)}</div>
            </div>
            <div className="box back">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="submission-container">
      <h3 className="form-title">Submit Your Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstInitial">First Initial</label>
          <input
            type="text"
            id="firstInitial"
            name="firstInitial"
            value={formData.firstInitial}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            required
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="form-control"
          >
            <option value="">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button type="submit" className="btn">Submit Review</button>
      </form>
    </div>

    <div className="accent-div"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;