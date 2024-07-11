const User = require('../model/signup');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { firstname, lastname, email, phone, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        firstname,
        lastname,
        email,
        phone,
        password: hashedPassword,
        role: "client"
    });

    const savedUser = await newUser.save();
    return savedUser;
}

module.exports = { createUser };