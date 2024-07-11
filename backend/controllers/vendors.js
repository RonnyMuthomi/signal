const bcrypt = require('bcrypt');
const multer = require('multer');
const User = require('../model/vendors');

// Setup multer for file upload
const upload = multer({ dest: 'uploads/' });

async function createAdminAccount(req, res) {
    const { vendorType, username, email, phone, age, location, password } = req.body;
    const image = req.file ? req.file.filename : null;

    const role = req.body.role || 'vendor'; // Set default role to 'vendor' if not provided

    const missingAttributes = [];

    if (!vendorType) missingAttributes.push('vendorType');
    if (!username) missingAttributes.push('username');
    if (!email) missingAttributes.push('email');
    if (!phone) missingAttributes.push('phone');
    if (!age) missingAttributes.push('age');
    if (!location) missingAttributes.push('location');
    if (!image) missingAttributes.push('image');
    if (!password) missingAttributes.push('password');
    if (!role) missingAttributes.push('role');

    if (missingAttributes.length > 0) {
        const message = `Missing attribute(s): ${missingAttributes.join(', ')}`;
        console.log(message);
        return res.status(401).json({ message });
    }

    try {
        // Ensure password is a valid string
        if (typeof password !== 'string') {
            throw new Error('Invalid password format');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newVendor = new User({
            vendorType,
            username,
            email,
            phone,
            age,
            location,
            image,
            password: hashedPassword,
            role: role // Use the role from the request or the default
        });

        await newVendor.save();
        console.log('Vendor added successfully');
        return res.status(201).json({ message: 'Vendor added successfully' });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error creating vendor', error: error.message });
    }
}

module.exports = {
    createAdminAccount,
    upload // Export upload for use in routes
};