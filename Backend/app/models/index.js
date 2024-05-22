//this file is used to initialize sequelize

//const { dialect } = require("../config/db.config.js");
const dbConfig = require("../config/db.config.js");

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,


});

const db = {};

db.sequelize = sequelize;
db.models = {};
db.models.User = require('./user.js')(sequelize, Sequelize.DataTypes);

module.exports = db;