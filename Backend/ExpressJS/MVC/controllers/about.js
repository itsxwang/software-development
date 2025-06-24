const express = require('express');

exports.getAbout = (req, res) => {
    res.render('about', {currentPage: 'about', pageTitle: 'About'});
}