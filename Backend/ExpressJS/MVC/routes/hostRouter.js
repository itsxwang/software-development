const express = require('express');
const multer = require('multer');
const path = require('path');

const { getaddHome, postAddHome, gethostHomes, geteditHome, posteditHome, deleteHomeConfirmation } = require('../controllers/hostController');


const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/uploads")); // in which directory the file will be saved
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // name of the file to be saved
    },
});

const upload = multer({ storage: storage });


// handle host routes
router.get('/add-home', getaddHome);

router.post('/add-home', upload.single("homeImage") , postAddHome);

router.get('/host-homes', (req, res) => {
    gethostHomes(req, res);
})

router.get('/edit-home/:id', (req, res) => {
    geteditHome(req, res);
})

router.post('/edit-home/:id',upload.single("homeImage"), posteditHome)

router.get('/delete-home-confirmation/:id', deleteHomeConfirmation)

module.exports = router;