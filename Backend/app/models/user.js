const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    return User;
}