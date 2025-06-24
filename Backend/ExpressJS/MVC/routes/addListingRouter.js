const express = require('express');
const { addListingRouter } = require('../controllers/addListingRouter');

const router = express.Router();

router.get('/add', (req, res) => {
   addListingRouter(req, res);  
})

module.exports = router;