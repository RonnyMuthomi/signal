// const User = require('../model/vendors');
// const bcrypt = require('bcrypt');

// async function createAdminAccount(req, res) {
//     const { vendorType, username, email, phone, age, location, image, password, role } = req.body;

//     if (!vendorType || !username || !email || !phone || !age || !location || !image || !password || !role) {
//         console.log('Missing attributes');
//         return res.status(401).json({ message: 'Missing attribute' });
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newVendor = new User({
//             vendorType,
//             username,
//             email,
//             phone,
//             age,
//             location,
//             image,
//             password: hashedPassword,
//             role: "vendor" // Ensure this matches your intended role
//         });

//         await newVendor.save();
//         console.log('Vendor added successfully');
//         return res.status(201).json({ message: 'Vendor added successfully' });
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({ message: 'Error creating vendor', error: error.message });
//     }
// }

// module.exports = createAdminAccount;