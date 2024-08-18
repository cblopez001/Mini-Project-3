import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the change here
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';  // Adjust the path if necessary
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // New API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
