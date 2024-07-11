const express = require('express');
const User = require('../model/vendors'); // Adjust the path to your User model
const router = express.Router();

router.get('/photoG', async(req, res) => {
    try {
        const users = await User.find({}, 'username'); // Only select the 'firstname' field
        res.status(200).json({ success: true, users });
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;