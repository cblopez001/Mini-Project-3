const express = require('express');
const { subscribeToNewsletter } = require('../controllers/newsletterController'); // Ensure this path is correct
const router = express.Router();

// Route to handle newsletter subscription
router.post('/', subscribeToNewsletter);

module.exports = router;
