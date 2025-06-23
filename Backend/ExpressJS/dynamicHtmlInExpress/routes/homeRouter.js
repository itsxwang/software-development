// core
const express = require("express");
const path = require("path");

// local
const pathUtil = require("../utils/pathUtil");

const router = express.Router();

router.get("/home", (req, res) =>
    res.render("home", { pageTitle: "Home",currentPage:"home" })
);

router.get("/", (req, res) =>
    res.render("home", { pageTitle: "Home",currentPage:"home" })
);


module.exports = router;