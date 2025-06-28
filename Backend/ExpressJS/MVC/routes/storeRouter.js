const express = require("express");
const fs = require("fs");
const path = require("path");


const { getIndex, postIndex, getAbout, getfavourites, postfavourites, getbookings, getHomeDetails } = require("../controllers/storeController");


const router = express.Router();


// handle store routes
router.get("/", (req, res) => {
  getIndex(req, res);
});

router.get("/home/:homeId", (req, res) => {
  getHomeDetails(req, res);
});

router.get("/about", (req, res) => {
  getAbout(req, res);
});

router.get("/favourites", (req, res) => {
  getfavourites(req, res);
});

router.post("/favourites", (req, res) => {
  postfavourites(req, res);
});

router.get("/bookings", (req, res) => {
  getbookings(req, res);
});




module.exports = router;