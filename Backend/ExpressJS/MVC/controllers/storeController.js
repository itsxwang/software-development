const path = require('path');

// 
const Home = require('../models/homes');
const fs = require('fs');
exports.getIndex = (req, res) => {
    Home.fetchAll(homes=>{
        res.render(path.join('store', 'home-list'), { homes: homes, currentPage: 'home', pageTitle: 'Home' });
    });    
};

exports.postIndex = (req, res,homes) => {
    const { aboutHome, homeAddress, contactinfo, homePrice } = req.body;
    const homeImage = req.file ? "/uploads/" + req.file.filename : "";

    const home = new Home(aboutHome, homeAddress, contactinfo, homePrice, homeImage);
    home.save();

    res.redirect('/');
};


exports.getaddHome = (req, res) => {
    res.render(path.join('host', 'addHome'), {currentPage: 'addHome', pageTitle: 'Add Home'});
}


exports.getAbout = (req, res) => {
    res.render(path.join('store', 'about'), {currentPage: 'about', pageTitle: 'About'});
}

exports.getfavourites = (req, res) => {
 res.render(path.join('store', 'favourites'), {currentPage: 'favourites', pageTitle: 'Favourites'});   
}

exports.getbookings = (req, res) => {
    res.render(path.join('store', 'bookings'), {currentPage: 'bookings', pageTitle: 'Bookings'});
}