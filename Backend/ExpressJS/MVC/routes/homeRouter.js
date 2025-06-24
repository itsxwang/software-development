const express = require("express");
const router = express.Router();
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const { getAddHome, postAddHome } = require("../controllers/home");


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

router.get("/home", (req, res) => {
  getAddHome(req, res);
});

router.get("/", (req, res) => {
  getAddHome(req, res);
});

// now upload.single() will add the file to the destination folder, with the specified name - that we specified in multer.diskStorage({})
router.post("/home", upload.single("homeImage"), (req, res) => {
  postAddHome(req, res);
});

module.exports = router;
