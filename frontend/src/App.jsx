import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/homePage.jsx';
import AboutPage from './pages/aboutPage.jsx';
import ContactPage from './pages/contactPage.jsx';
import EpisodePage from './pages/episodePage.jsx';
import YouTubePage from './pages/youtubePage.jsx'; 

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/episodes" element={<EpisodePage />} />
        <Route path="/youtube" element={<YouTubePage />} />
      </Routes>
    </div>
  );
}

export default App;
