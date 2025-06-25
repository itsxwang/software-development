const Home = require('../models/homes');
const fs = require('fs');
exports.getAddHome = (req, res) => {
    Home.fetchAll(homes=>{
        res.render('home', { homes: homes, currentPage: 'home', pageTitle: 'Home' });
    });    
};

exports.postAddHome = (req, res,homes) => {
    const { aboutHome, homeAddress, contactinfo, homePrice } = req.body;
    const homeImage = req.file ? "/uploads/" + req.file.filename : "";

    const home = new Home(aboutHome, homeAddress, contactinfo, homePrice, homeImage);
    home.save();

    res.redirect('/home');
};

