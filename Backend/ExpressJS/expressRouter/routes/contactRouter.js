
// core
const path = require("path");

// external
const express = require("express");

// local
const pathUtil = require("../utils/pathUtil");


const router = express.Router();


router.get("/contact", (req, res) =>
  res.sendFile(path.join(pathUtil, "views", "contact.html"))
);

module.exports = router;
