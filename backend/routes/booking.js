const express = require('express');
const mongoose = require('mongoose');
const Booking = require('../model/booking');


const router = express.Router();


router.post('/create', async(req, res) => {
    const { portfolioId, selectdate, starttime, endtime, event, atendees, location, message } = req.body;

    // Check for required fields
    if (!portfolioId || !selectdate || !starttime || !endtime || !event || !message || !atendees || !location) {
        console.error("Missing required fields");
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    try {
        // Save the booking
        const newBooking = new Booking(req.body);
        const booking = await newBooking.save();
        console.log("Booking saved successfully");



        res.json({ success: true, message: "Booking sent successfully", booking });
    } catch (err) {
        console.error("Error during booking creation or email sending:", err);
        res.status(400).json({ success: false, message: "Error: " + err.message });
    }
});

module.exports = router;