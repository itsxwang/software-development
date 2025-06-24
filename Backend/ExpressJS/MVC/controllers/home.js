exports.getAddHome = (req, res, homes) => {
    res.render('home', { homes: homes, currentPage: 'home', pageTitle: 'Home' });
};

exports.postAddHome = (req, res,homes) => {
    const homeData = {
        aboutHome: req.body.aboutHome,
        homeAddress: req.body.homeAddress,
        contactinfo: req.body.contactinfo,
        homePrice: req.body.homePrice,
        homeImage: req.file ? '/uploads/' + req.file.filename : ''
    };
    homes.push(homeData);
    res.redirect('/home');
};

