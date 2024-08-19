const Review = require('../models/Review');

// Get all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Failed to fetch reviews' });
  }
};

// Submit a new review
exports.submitReview = async (req, res) => {
  try {
    const { firstInitial, lastName, review } = req.body;
    const newReview = new Review({ firstInitial, lastName, review });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview); // Respond with the new review
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ message: 'Failed to submit review' });
  }
};
