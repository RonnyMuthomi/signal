const express = require('express');
const Booking = require('../model/booking');
const booking = require('../model/booking');
const router = express.Router();

router.post('/create', (req, res) => {
    const newBooking = new Booking(req.body);

    newBooking.save()
        .then(booking => res.json({ success: true, message: "success", booking }))

    .catch(err => res.status(400).json({ success: false, message: "Error:" + err }));
});

// Route to get all bookings
router.get('/', (req, res) => {
    Booking.find()
        .populate('portfolioId')
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;