const express = require('express');
const Portfolio = require('../model/imageP');
const router = express.Router();

// Endpoint to get a specific portfolio by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Portfolio.findById(id)
        .then(portfolio => {
            if (!portfolio) {
                return res.status(404).json({ success: false, message: 'Portfolio not found' });
            }
            res.json(portfolio);
        })
        .catch(err => res.status(500).json({ success: false, message: 'Server error: ' + err }));
});

module.exports = router;