const mongoose = require('mongoose');


const BookingSchema = new mongoose.Schema({
    portfolioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portfolio',
        required: true
    },

    selectdate: {
        type: Date,
        required: true
    },

    starttime: {
        type: String,
        required: true
    },

    endtime: {
        type: String,
        required: true
    },
    event: {
        type: String,
        required: true
    },
    atendees: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },

    message: {
        type: String
    }
});

module.exports = mongoose.model('Booking', BookingSchema);