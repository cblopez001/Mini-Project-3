import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/home.css'; // Import the CSS file for this page
import Footer from '../components/footer'; // Import the Footer component

/* Import images */
import episodeUpdateDemo from '../assets/images/landingPageImages/episodeUpdateDemo.png';
import merchCarouselImage from '../assets/images/landingPageImages/merchCarouselImage.png';
import subscribeCarouselImage from '../assets/images/landingPageImages/subscribeCarouselImage.png';
import femaleIconDemo from '../assets/images/landingPageImages/femaleIconDemo.png';
import maleIconDemo from '../assets/images/landingPageImages/maleIconDemo.png';
import shopButtonImage from '../assets/images/landingPageImages/shopButtonImage.png'

const HomePage = () => {
    const [formData, setFormData] = useState({ firstInitial: '', lastName: '', review: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log('Submitted review:', formData);
      // Optionally, clear the form after submission
      setFormData({ firstInitial: '', lastName: '', review: '' });
    };

  return (
    <>
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
          <form className="email-form">
            <div className="email-input">
              <i className="fa-regular fa-envelope"></i>
              <input className="ebox" type="email" placeholder="Enter your email" />
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <img src={femaleIconDemo} alt="Cherakye Lopez" />
                    <h2>Cherakye Lopez</h2>
                  </div>
                  <div className="box back">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit atque accusamus, nobis totam eos?</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <img src={maleIconDemo} alt="Nelson Reyes" />
                    <h2>Nelson Reyes</h2>
                  </div>
                  <div className="box back">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolore vero necessitatibus labore sed cum mollitia fugiat rem incidunt!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <img src={femaleIconDemo} alt="Sarah Read" />
                    <h2>Sarah Read</h2>
                  </div>
                  <div className="box back">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <img src={femaleIconDemo} alt="Deryshelle Crews" />
                    <h2>Deryshelle Crews</h2>
                  </div>
                  <div className="box back">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam suscipit atque accusamus, nobis totam eos?</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <img src={maleIconDemo} alt="Freddy Walker" />
                    <h2>Freddy Walker</h2>
                  </div>
                  <div className="box back">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis dolore vero necessitatibus labore sed cum mollitia fugiat rem incidunt!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <img src={femaleIconDemo} alt="Andreya Bryson" />
                    <h2>Andreya Bryson</h2>
                  </div>
                  <div className="box back">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Submission Section */}
      <div className="review-submission-container">
        <h2>Submit Your Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstInitial">First Initial</label>
            <input
              type="text"
              className="form-control"
              id="firstInitial"
              name="firstInitial"
              value={formData.firstInitial}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="review">Your Review</label>
            <textarea
              className="form-control"
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      </div>

      <div className="accent-div"></div>

      {/* Footer */}
      <Footer />

    </>
  );
};

export default HomePage;
