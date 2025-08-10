const path = require("path");
const fs = require("fs");

const Home = require("../models/homes");
const Favourite = require("../models/favourites");


exports.getIndex = (req, res) => {
  Home.find().then((homes) => {
    Favourite.getFavourites((favourites) => {
      res.render(path.join("store", "home-list"), {
        homes,
        favourites,
        currentPage: "home",
        pageTitle: "Home",
        isLoggedIn : req.session.isLoggedIn 
      });
    });
  });
};


exports.getHomeDetails = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  Home.findById(req.params.homeId).then((home) => {
    Favourite.getFavourites((favourites) => {
      if (!home) {
        return res.redirect("/");
      }
      res.render(path.join("store", "home-details"), {
        home,
        favourites,
        currentPage: "homeDetails",
        pageTitle: home ? home.name : "Home Details",
        isLoggedIn : req.session.isLoggedIn
      });
    });
  });
};

exports.getAbout = (req, res) => {
  res.render(path.join("store", "about"), {
    currentPage: "about",
    pageTitle: "About",
    isLoggedIn : req.session.isLoggedIn
  });
};

exports.getfavourites = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  Home.find().then((homes) => {
    Favourite.getFavourites((favourites) => {
      const favHomes = homes.filter((home) => {
        return favourites.includes(home.id);
      });
      res.render(path.join("store", "favourites"), {
        favHomes,
        favourites,
        currentPage: "favourites",
        pageTitle: "Favourites",
        isLoggedIn : req.session.isLoggedIn
      });
    });
  });
};

exports.postfavourites = (req, res) => {
  Favourite.changeFavouritesData(req.body.id);
};

exports.getbookings = (req, res) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/auth/login");
  }
  res.render(path.join("store", "bookings"), {
    currentPage: "bookings",
    pageTitle: "Bookings",
    isLoggedIn : req.session.isLoggedIn
  });
};