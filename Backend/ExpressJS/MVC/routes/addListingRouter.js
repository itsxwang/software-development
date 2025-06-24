const express = require('express');

const router = express.Router();

router.get('/add', (req, res) => {
    res.render('addListing', {currentPage: 'addListing',pageTitle: 'Add Listing'});
})

module.exports = router;