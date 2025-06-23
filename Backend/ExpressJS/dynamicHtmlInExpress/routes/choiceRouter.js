// core
const express = require("express");
const path = require("path");

// local
const pathUtil = require("../utils/pathUtil");
const { title } = require("process");

const router = express.Router();

router.post("/choice", (req, res) => {
  console.log(req.body);
  res.render("choice", {...req.body,pageTitle:"Thank You"}); // all the data of template(ejs file) will be given in object
});

module.exports = router;
