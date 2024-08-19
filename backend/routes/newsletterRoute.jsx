const express = require('express');
const router = express.Router();
const { subscribeToNewsletter } = require('../controllers/subscribeController'); // Add this

// POST route for subscribing to newsletter
router.post('/', subscribeToNewsletter);

module.exports = router;

module.exports = router;
