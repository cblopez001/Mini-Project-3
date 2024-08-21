const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import routes
const reviewRoutes = require('./routes/reviewRoutes');
const subscribeRoutes = require('./routes/newsletterRoute');
const episodeRoutes = require('./routes/episodeRoute'); // Import episode routes

// Initialize express application
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/MonsterMashDatabase')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Use routes
app.use('/api/episodes', episodeRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/subscribe', subscribeRoutes);

// Catch-all route for frontend single-page application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
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
