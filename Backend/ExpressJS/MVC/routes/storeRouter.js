const express = require("express");
const fs = require("fs");
const path = require("path");

const multer = require("multer");

const { getAddHome, postAddHome,getAbout, getfavourites } = require("../controllers/storeController");


const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads")); // in which directory the file will be saved
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // name of the file to be saved
  },
});

const upload = multer({ storage: storage });


// handle store routes
router.get("/", (req, res) => {
  getAddHome(req, res);
});

// now upload.single() will add the file to the destination folder, with the specified name - that we specified in multer.diskStorage({})
router.post("/", upload.single("homeImage"), (req, res) => {
  postAddHome(req, res);
});

router.get("/about", (req, res) => {
  getAbout(req, res);
});

router.get("/favourites", (req, res) => {
  getfavourites(req, res);
});


module.exports = router;