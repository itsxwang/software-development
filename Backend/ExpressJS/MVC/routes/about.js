const express = require('express');

const router = express.Router();

router.get('/about', (req, res) => {
    res.render('about', {currentPage: 'about', pageTitle: 'About'});
})

module.exports = router;
