const express = require('express');
const router = express.Router();
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { getAddHome,postAddHome } = require('../controllers/home');

const homes = [];

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

router.get('/home', (req, res) => {
    getAddHome(req, res, homes);
});

router.get('/', (req, res) => {
    getAddHome(req, res, homes);
});


router.post('/home', upload.single('homeImage'), (req, res) => {
    postAddHome(req,res,homes);
});

module.exports = router;