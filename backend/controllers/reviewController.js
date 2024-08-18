// controllers/reviewController.js
const Review = require('../models/reviewModel');

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

exports.submitReview = async (req, res) => {
  const { firstInitial, lastName, review } = req.body;
  
  try {
    const newReview = new Review({ firstInitial, lastName, review });
    await newReview.save();
    res.status(201).json({ message: 'Review submitted successfully', newReview });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting review', error });
  }
};
