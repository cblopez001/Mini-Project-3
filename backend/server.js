// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Import routes
const reviewRoutes = require('./routes/reviewRoutes');

// Initialize express application
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

// Use routes
app.use('/api/reviews', reviewRoutes);

// Catch-all route for frontend single-page application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'public.html'));
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
