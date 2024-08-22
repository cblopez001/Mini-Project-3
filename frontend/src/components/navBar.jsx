// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/navBar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Monster Mansion Podcast</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="nav-item dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              MENU
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="/">HOME</Link></li>
              <li><Link className="dropdown-item" to="/episodes">EPISODES</Link></li>
              <li><Link className="dropdown-item" to="/about">ABOUT</Link></li>
              <li><Link className="dropdown-item" to="/contact">CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
