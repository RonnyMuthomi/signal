const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    portfolioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },

    clientName: {
        type: String,
        required: true
    },

    clientEmail: {
        type: String,
        required: true
    },

    bookingDate: {
        type: Date,
        required: true
    },

    message: {
        type: String
    }
});

module.exports = mongoose.model('Booking', BookingSchema);