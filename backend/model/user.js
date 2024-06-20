const mongoose = require('mongoose')

const schemaData = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('tonnie', schemaData);