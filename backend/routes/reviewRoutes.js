// routes/reviewRoutes.js
const express = require('express');
const { getReviews, submitReview } = require('../controllers/reviewController');
const router = express.Router();

router.get('/reviews', getReviews);
router.post('/submit-review', submitReview);

module.exports = router;
