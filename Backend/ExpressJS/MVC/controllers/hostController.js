const path = require('path');

exports.getaddListing = (req, res) => {
    res.render(path.join('host', 'addListing'), {currentPage: 'addListing', pageTitle: 'Add Listing'});
}