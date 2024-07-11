const mongoose = require('mongoose')

const adminModel = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['client', 'admin'],
        required: true,
    }
})
module.exports = mongoose.model('Admin', adminModel);