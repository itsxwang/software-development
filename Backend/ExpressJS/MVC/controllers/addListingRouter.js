const express = require('express');

exports.addListingRouter = (req, res) => {
    res.render('addListing', {currentPage: 'addListing', pageTitle: 'Add Listing'});
}