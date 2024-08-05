const express = require('express');
const router = express.Router();
const User = require('../model/signup'); // Adjust the path as needed

// Route to get user details with only firstname, lastname, email, and phone
router.get('/user/:id', async(req, res) => {
    try {
        const userId = req.params.id;

        // Find user by ID and select only the required fields
        const user = await User.findById(userId).select('firstname lastname email phone');

        // Check if user was found
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Return the user data
        res.json(user);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;