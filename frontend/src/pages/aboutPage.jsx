import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/about.css'; // Import the CSS file for this page
import Footer from '../components/footer'; // Import the Footer component

const AboutPage = () => {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>At Monster Mansion Podcast, our mission is to bring you the best in movie reviews, interviews, and entertainment. We strive to provide insightful and entertaining content to enhance your movie-watching experience.</p>
        </section>
        <section className="team">
          <h2>Meet the Team</h2>
          <div className="team-member">
            <img src="../assets/images/team/member1.jpg" alt="Team Member 1" className="team-img" />
            <h3>Jane Doe</h3>
            <p>Host and Producer</p>
          </div>
          <div className="team-member">
            <img src="../assets/images/team/member2.jpg" alt="Team Member 2" className="team-img" />
            <h3>John Smith</h3>
            <p>Co-Host and Editor</p>
          </div>
        </section>
        <section className="history">
          <h2>Our History</h2>
          <p>Founded in 2021, Monster Mansion Podcast started as a small passion project and has since grown into a leading source for movie reviews and podcasting. We continue to evolve and expand our content to bring you the latest and greatest in the world of cinema.</p>
        </section>
      </div>

      <div className="accent-div"></div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AboutPage;
