const Home = require('../models/homes');

exports.getAddHome = (req, res) => {
    const homes = Home.fetchAll();    
    res.render('home', { homes: homes, currentPage: 'home', pageTitle: 'Home' });
};

exports.postAddHome = (req, res,homes) => {
    const { aboutHome, homeAddress, contactinfo, homePrice } = req.body;
    const homeImage = req.file ? "/uploads/" + req.file.filename : "";

    const home = new Home(aboutHome, homeAddress, contactinfo, homePrice, homeImage);
    home.save();
    res.redirect('/home');
};

