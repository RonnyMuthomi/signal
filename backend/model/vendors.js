const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    vendorType: {
        type: String,
        enum: ['photographer', 'event organizer'],
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'vendor',
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Vendor', userSchema);