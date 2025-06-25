const express = require('express');
const path = require('path');

exports.getAbout = (req, res) => {
    res.render(path.join('store', 'about'), {currentPage: 'about', pageTitle: 'About'});
}