const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../model/user');

// Register
router.post('/register', async(req, res) => {
    const { firstname, lastname, email, phone, password, role } = req.body;
    console.log('Request body:', req.body); // Debugging log

    if (!firstname || !lastname || !email || !phone || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstname,
            lastname,
            email,
            phone,
            password: hashedPassword,
            role
        });

        await newUser.save();
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ error: 'Error registering user' });
    }
});

module.exports = router;