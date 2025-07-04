const path = require("path");
const fs = require("fs");

const Home = require("../models/homes");
const Favourite = require("../models/favourites");


exports.getIndex = (req, res) => {
  Home.fetchAll().then(([homes]) => {
    Favourite.getFavourites((favourites) => {
      res.render(path.join("store", "home-list"), {
        homes,
        favourites,
        currentPage: "home",
        pageTitle: "Home",
      });
    });
  });
};


exports.getHomeDetails = (req, res) => {
  Home.findById(req.params.homeId).then(([rows]) => {
    const home = rows[0];
    Favourite.getFavourites((favourites) => {
      if (!home) {
        return res.redirect("/");
      }
      res.render(path.join("store", "home-details"), {
        home,
        favourites,
        currentPage: "homeDetails",
        pageTitle: home ? home.name : "Home Details",
      });
    });
  });
};

exports.getAbout = (req, res) => {
  res.render(path.join("store", "about"), {
    currentPage: "about",
    pageTitle: "About",
  });
};

exports.getfavourites = (req, res) => {
  Home.fetchAll().then(([homes]) => {
    Favourite.getFavourites((favourites) => {
      const favHomes = homes.filter((home) => {
        return favourites.includes(home.id);
      });
      res.render(path.join("store", "favourites"), {
        favHomes,
        favourites,
        currentPage: "favourites",
        pageTitle: "Favourites",
      });
    });
  });
};

exports.postfavourites = (req, res) => {
  Favourite.changeFavouritesData(req.body.id);
};

exports.getbookings = (req, res) => {
  res.render(path.join("store", "bookings"), {
    currentPage: "bookings",
    pageTitle: "Bookings",
  });
};