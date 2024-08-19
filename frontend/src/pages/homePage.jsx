import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/home.css'; // Import the CSS file for this page
import Footer from '../components/footer'; // Import the Footer component
import Navbar from '../components/navBar';

/* Import images */
import episodeUpdateDemo from '../assets/images/landingPageImages/episodeUpdateDemo.png';
import merchCarouselImage from '../assets/images/landingPageImages/merchCarouselImage.png';
import subscribeCarouselImage from '../assets/images/landingPageImages/subscribeCarouselImage.png';
import shopButtonImage from '../assets/images/landingPageImages/shopButtonImage.png';

const HomePage = () => {
  const [formData, setFormData] = useState({ firstInitial: '', lastName: '', review: '' });
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the database on component mount
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
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
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Review submitted successfully');
        setFormData({ firstInitial: '', lastName: '', review: '' });

        // Optionally, refetch reviews to update the displayed list
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
  const email = e.target.email.value;

  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      console.log('Subscription successful');
      // Optionally handle success (e.g., show a success message)
    } else {
      console.log('Error subscribing');
      // Optionally handle errors (e.g., show an error message)
    }
  } catch (error) {
    console.log('Error:', error);
  }
};


  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Accent Div */}
      <div className="accent-div"></div>

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

      {/* Shop and Episode Buttons */}
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
              <Link to="/shop">
                <img src={shopButtonImage} className="panel-img" alt="Merch Shop" />
                <div className="overlay">
                  <h3 className="panel-text">Merch Shop</h3>
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
                name="email"
                placeholder="Enter your email"
                required
              />
              <button className="btn" type="submit">Subscribe</button>
            </div>
          </form>
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
      <div className="listener-container">
        {reviews.map((review, index) => (
          <div key={index} className="card">
            <div className="box front">
              <h2>{`${review.firstInitial} ${review.lastName}`}</h2>
            </div>
            <div className="box back">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Review Submission Section */}
      <div className="submission-container">
        <h2 className="text-center mb-4">Submit Your Review</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Submit a Review</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="initial" className="form-label">First Initial</label>
                    <input
                      type="text"
                      className="form-control"
                      id="initial"
                      name="firstInitial"
                      value={formData.firstInitial}
                      onChange={handleChange}
                      placeholder="J"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="review" className="form-label">Your Review</label>
                    <textarea
                      className="form-control"
                      id="review"
                      name="review"
                      rows="4"
                      value={formData.review}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit Review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
