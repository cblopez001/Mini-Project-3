
import React, { useState } from 'react';
import Navbar from '../components/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import '../assets/styles/episode.css'; // Ensure this CSS file doesn't conflict with Font Awesome
import Footer from '../components/footer'; // Import the Footer component

// Import Images

import littleShopImg from '../assets/images/episodeImages/littleShopImg.jpg';
import draculaImg from '../assets/images/episodeImages/draculaImg.jpg';
import batsImg from '../assets/images/episodeImages/batsImg.jpg';
import blackLagoonImg from '../assets/images/episodeImages/blackLagoonImg.jpg';
import frightNightImg from '../assets/images/episodeImages/frightNightImg.jpg';
import theThingImg from '../assets/images/episodeImages/theThingImg.jpg';
import killerKlownsImg from '../assets/images/episodeImages/killerKlownsImg.jpg';


//Import Audio Files
import audioDemo from '../assets/images/audioDemo.wav'; // Ensure this path is correct


const episodes = [
  // Episode data
  {
    title: 'Little Shop of Horrors',
    imgSrc: littleShopImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Movies',
  },
  // Add other episodes here
  {
    title: 'Dracula',
    imgSrc: draculaImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Books',
  },
  {
    title: 'Bats',
    imgSrc: batsImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Movies',
  },
  {
    title: 'Killer Klowns from Outer Space',
    imgSrc: killerKlownsImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Games',
  },
  {
    title: 'The Creature from the Black Lagoon',
    imgSrc: blackLagoonImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Comics',
  },
  {
    title: 'Fright Night',
    imgSrc: frightNightImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Movies',
  },
  {
    title: 'The Thing',
    imgSrc: theThingImg,
    audioSrc: audioDemo,
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
    category: 'Comics',
  },
];

const EpisodePage = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEpisodes = episodes.filter(episode => {
    const matchesCategory = filter === 'All' || episode.category === filter;
    const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>

      <div className="accent-div"></div>

      <div className="filter-container">
        <ul className="filter-wrapper">
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('All')}>All</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Movies')}>Movies</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Games')}>Games</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Books')}>Books</a>
          </li>
          <li className="filter-item">
            <a href="#" className="filter-link" onClick={() => setFilter('Comics')}>Comics</a>
          </li>
        </ul>

        <div className="search">
          <form action="#">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="button" className="btn btn-primary">
              <i className="fas fa-search"></i> {/* Font Awesome icon */}
            </button>
          </form>
        </div>
      </div>

      <div className="library-container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredEpisodes.map((episode, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <a href="#">
                  <img src={episode.imgSrc} className="card-img-top" alt="Episode Thumbnail" style={{ width: '100%', height: '800px' }} />
                </a>
                <div className="card-body">
                  <h5 className="card-title">{episode.title}</h5>
                  <p className="card-text">{episode.description}</p>
                  <audio src={episode.audioSrc} controls>Listen to episode</audio>
                </div>
                <div className="card-footer"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="accent-div"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EpisodePage;