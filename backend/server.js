const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// Import routes
const reviewRoutes = require('./routes/reviewRoutes');
const subscribeRoutes = require('./routes/newsletterRoute'); // Ensure this file is a JS file for backend routing

// Initialize express application
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Serve static files from the 'public' directory in the frontend build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Connect to MongoDB (remove deprecated options)
mongoose.connect('mongodb://localhost:27017/MonsterMashDatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Use routes
app.use('/api/reviews', reviewRoutes);
app.use('/api/subscribe', subscribeRoutes); // Use the correct route file

// Catch-all route for frontend single-page application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/src/pages/homePage.jsx', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

