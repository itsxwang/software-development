// core
const express = require("express");
const path = require("path");

// local
const pathUtil = require("../utils/pathUtil");

const router = express.Router();

router.get("/contact", (req, res) =>
    res.render("contact", { pageTitle: "Contact", currentPage:"contact" })
);

module.exports = router;