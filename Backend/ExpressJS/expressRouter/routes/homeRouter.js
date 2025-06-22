
// core
const path = require("path");

// external
const express = require("express");

// local
const pathUtil = require("../utils/pathUtil");


const router = express.Router();


router.get("/home", (req, res) =>
  res.sendFile(path.join(pathUtil, "views", "home.html"))
);
router.get("/", (req, res) =>
  res.sendFile(path.join(pathUtil, "views", "home.html"))
);

module.exports = router;

