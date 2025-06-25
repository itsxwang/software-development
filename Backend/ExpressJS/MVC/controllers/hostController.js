const path = require('path');
const Home = require('../models/homes');

exports.getaddHome = (req, res) => {
    res.render(path.join('host', 'addHome'), {currentPage: 'addHome', pageTitle: 'Add Home'});
}

exports.gethostHomes = (req, res) => {
    Home.fetchAll(homes=>{
        res.render(path.join('host', 'host-homes'), { homes: homes, currentPage: 'hostHomes', pageTitle: 'Host Homes' });
    })
}