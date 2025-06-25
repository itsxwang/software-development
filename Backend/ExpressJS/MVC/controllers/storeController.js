const path = require('path');

// 
const Home = require('../models/homes');
const fs = require('fs');
exports.getAddHome = (req, res) => {
    Home.fetchAll(homes=>{
        res.render(path.join('store', 'home-list'), { homes: homes, currentPage: 'home', pageTitle: 'Home' });
    });    
};

exports.postAddHome = (req, res,homes) => {
    const { aboutHome, homeAddress, contactinfo, homePrice } = req.body;
    const homeImage = req.file ? "/uploads/" + req.file.filename : "";

    const home = new Home(aboutHome, homeAddress, contactinfo, homePrice, homeImage);
    home.save();

    res.redirect('/');
};


exports.getaddListing = (req, res) => {
    res.render(path.join('host', 'addListing'), {currentPage: 'addListing', pageTitle: 'Add Listing'});
}


exports.getAbout = (req, res) => {
    res.render(path.join('store', 'about'), {currentPage: 'about', pageTitle: 'About'});
}

exports.getfavourites = (req, res) => {
 res.render(path.join('store', 'favourites'), {currentPage: 'favourites', pageTitle: 'Favourites'});   
}