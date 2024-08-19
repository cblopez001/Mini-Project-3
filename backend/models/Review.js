// models/reviewModel.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  firstInitial: { type: String, required: true },
  lastName: { type: String, required: true },
  review: { type: String, required: true },
});

module.exports = mongoose.model('Review', reviewSchema);
