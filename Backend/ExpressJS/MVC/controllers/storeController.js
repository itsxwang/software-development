const path = require("path");
const fs = require("fs");
const User = require("../models/user");
const Home = require("../models/homes");

exports.getIndex = async (req, res) => {
  let favourites = [];
  if (req.session.isLoggedIn) {
    const user = await User.findById(req.session.user._id);
    favourites = user.favourites;

    // homes id cleanup from favourites list, that are deleted from the homes database
    Home.find().then((homes) => {
      user.favourites = user.favourites.filter(homeId => {
        return homes.find((home) => home._id.toString() == homeId);
      });
      user.save();
    });
    
  } else {
    favourites = [];
  }
  Home.find().then((homes) => {
    res.render(path.join("store", "home-list"), {
      homes,
      favourites,
      currentPage: "home",
      pageTitle: "Home",
      isLoggedIn: req.session.isLoggedIn,
      userType: req.session.user ? req.session.user.userType : null,
    });
  });
};

exports.getHomeDetails = async (req, res) => {
  let favourites = [];
  if (req.session.isLoggedIn) {
    const user = await User.findById(req.session.user._id);
    favourites = user.favourites;
  } else {
    favourites = [];
  }

  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  Home.findById(req.params.homeId).then((home) => {
    if (!home) {
      return res.redirect("/");
    }
    res.render(path.join("store", "home-details"), {
      home,
      favourites,
      currentPage: "homeDetails",
      pageTitle: home ? home.name : "Home Details",
      isLoggedIn: req.session.isLoggedIn,
      userType: req.session.user ? req.session.user.userType : null,
    });
  });
};

exports.getAbout = (req, res) => {
  res.render(path.join("store", "about"), {
    currentPage: "about",
    pageTitle: "About",
    isLoggedIn: req.session.isLoggedIn,
    userType: req.session.user ? req.session.user.userType : null,
  });
};

exports.getfavourites = async (req, res) => {
  let favourites = [];
  if (req.session.isLoggedIn) {
    const user = await User.findById(req.session.user._id);
    favourites = user.favourites;
  } else {
    favourites = [];
  }

  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  Home.find().then((homes) => {
    const favHomes = homes.filter((home) => {
      return favourites.includes(home.id);
    });
    res.render(path.join("store", "favourites"), {
      favHomes,
      favourites,
      currentPage: "favourites",
      pageTitle: "Favourites",
      isLoggedIn: req.session.isLoggedIn,
      userType: req.session.user ? req.session.user.userType : null,
    });
  });
};

exports.postfavourites = async (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  const user = await User.findById(req.session.user._id);

  const exists = user.favourites.some((id) => {
    {
      return id.toString() === req.body.id;
    }
  });

  if (exists) {
    user.favourites = user.favourites.filter((id) => {
      return id.toString() !== req.body.id;
    });
  } else {
    await user.favourites.push(req.body.id);
  }

  await User.findByIdAndUpdate(user._id, user);
  res.redirect("/store/favourites");
};

exports.getbookings = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  res.render(path.join("store", "bookings"), {
    currentPage: "bookings",
    pageTitle: "Bookings",
    isLoggedIn: req.session.isLoggedIn,
    userType: req.session.user ? req.session.user.userType : null,
  });
};
