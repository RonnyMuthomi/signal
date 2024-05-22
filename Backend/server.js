const express = require("express");
const cors = require("cors")

const mysql = require('mysql2')
const { Sequelize } = require('sequelize');

const app = express();
const path = require("path")
const db = require('./app/models')
var corsOptions = {
    origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome express js" });
});


//db.sequelize.sync();
(async() => {
    await db.sequelize.sync();
})();
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});