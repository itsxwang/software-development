const express = require('express');
const { getaddListing } = require('../controllers/hostController');

const router = express.Router();

// handle host routes
router.get('/addlisting', (req, res) => getaddListing(req, res));

module.exports = router;