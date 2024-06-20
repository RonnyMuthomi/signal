const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);