const express = require("express");
const router = express.Router();
const { getTerms } = require("../controllers/termsController");

router.get("/terms", getTerms)

module.exports = router;
