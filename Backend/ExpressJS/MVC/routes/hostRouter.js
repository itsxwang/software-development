const express = require('express');
const { getaddHome, gethostHomes } = require('../controllers/hostController');

const router = express.Router();

// handle host routes
router.get('/addHome', (req, res) => getaddHome(req, res));

router.get('/host-homes', (req, res) => {
    gethostHomes(req, res);
})

module.exports = router;