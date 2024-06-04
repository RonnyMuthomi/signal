//const mongoose = require('mongoose');
const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/blossom');

mongoose.connection.on("connected", () => {
    console.log('connected to mongoDB Successfully');
});
mongoose.connection.on("error", (err) => {
    console.log(`mongoDB connection error: ${err}`);
});

module.exports = mongoose;