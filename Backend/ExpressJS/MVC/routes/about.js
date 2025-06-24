const express = require('express');
const { getAbout } = require('../controllers/about');

const router = express.Router();

router.get('/about', (req, res) => {
    getAbout(req, res);
})

module.exports = router;
