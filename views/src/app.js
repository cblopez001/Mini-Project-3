// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navBar';
import Home from './pages/homePage';
import Episodes from './pages/episodePage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes" element={<Episodes />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

