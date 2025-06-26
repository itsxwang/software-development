const path = require('path');
const fs = require('fs');

const Home = require('../models/homes');
const { v4: uuidv4 } = require('uuid');

exports.getIndex = (req, res) => {
    Home.fetchAll(homes=>{
        res.render(path.join('store', 'home-list'), { homes: homes, currentPage: 'home', pageTitle: 'Home' });
    });    
};

exports.postIndex = (req, res,homes) => {
    const { aboutHome, homeAddress, contactinfo, homePrice } = req.body;
    const homeImage = req.file ? "/uploads/" + req.file.filename : "";
    const id = uuidv4();

    const home = new Home(aboutHome, homeAddress, contactinfo, homePrice, homeImage, id);
    home.save();

    res.redirect('/');
};


exports.getHomeDetails = (req, res) => {
    Home.findById(req.params.homeId, (home) => {
        if (!home) {
            return res.redirect('/');
        }
        res.render(path.join('store', 'home-details'), { home, currentPage: 'homeDetails', pageTitle: home.aboutHome });
    });
}  


exports.getAbout = (req, res) => {
    res.render(path.join('store', 'about'), {currentPage: 'about', pageTitle: 'About'});
}

exports.getfavourites = (req, res) => {
 res.render(path.join('store', 'favourites'), {currentPage: 'favourites', pageTitle: 'Favourites'});   
}

exports.postfavourites = (req, res) => {
    console.log(req.body);
    res.render(path.join('store', 'favourites'), {currentPage: 'favourites', pageTitle: 'Favourites'});
}

exports.getbookings = (req, res) => {
    res.render(path.join('store', 'bookings'), {currentPage: 'bookings', pageTitle: 'Bookings'});
}