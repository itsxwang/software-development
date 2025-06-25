const path = require('path');
const express = require('express');

exports.addListingRouter = (req, res) => {
    res.render(path.join('host', 'addListing'), {currentPage: 'addListing', pageTitle: 'Add Listing'});
}