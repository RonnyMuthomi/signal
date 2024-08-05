const bcrypt = require('bcrypt');
const Vendor = require('../model/vendors');
const Client = require('../model/signup');
const { generateToken } = require('../utils/jwtUtils');
const { verifyToken } = require('../utils/authMiddle');

async function login(email, password) {
    try {
        // console.log(`Attempting to login with email: ${email}`);

        // Check Vendor model
        let user = await Vendor.findOne({ email });
        let role = "vendor";
        if (!user) {
            // Check Client model if not found in Vendor model
            user = await Client.findOne({ email });
            role = "client";
        }

        if (!user) {
            console.error(`User not found with email: ${email}`);
            throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.error('Password is incorrect');
            throw new Error('Incorrect password');
        }
        console.log('Password is valid');

        const token = generateToken(user);
        return { token, role }; // Include the role in the response
    } catch (error) {
        console.error('Error during login:', error.message);
        throw new Error('Invalid credentials');
    }
}


async function refreshToken(oldToken) {
    try {
        const decodedToken = verifyToken(oldToken);
        let user = await Vendor.findById(decodedToken._id);
        if (!user) {
            user = await Client.findById(decodedToken._id);
        }

        if (!user) {
            throw new Error('User not found');
        }

        const newToken = generateToken(user);
        return newToken;
    } catch (error) {
        console.error('Error during token refresh:', error.message);
        throw new Error('Invalid token');
    }
}

module.exports = {
    login,
    refreshToken
};