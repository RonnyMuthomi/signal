const express = require('express');
const multer = require('multer');
const Portfolio = require('../model/imageP');
const router = express.Router();

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Route to upload a new portfolio item
router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const newPortfolio = new Portfolio({
        image: req.file.path,
        caption: req.body.caption
    });

    newPortfolio.save()
        .then(portfolio => res.json({ success: true, message: 'Files uploaded successsfully', portfolio }))
        .catch(err => res.status(400).json({ success: false, message: "Error:" + err }));
});

// Route to fetch all portfolio items
router.get('/', (req, res) => {
    Portfolio.find()
        .then(portfolios => res.json(portfolios))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;