// const users = require('../model/sign'); // Ensure this is the correct model import
// const public = require('../model/login');
// const bcrypt = require('bcrypt');

// module.exports = {
//     create: async(req, res) => {
//         const { firstname, lastname, email, phone, password, confirmpassword } = req.body;

//         // Check if any required fields are missing
//         if (!firstname || !lastname || !email || !phone || !password || !confirmpassword) {
//             return res.status(400).json({
//                 message: 'missing attributes'
//             });
//         }

//         // Check if password and confirmpassword match
//         if (password !== confirmpassword) {
//             return res.status(400).json({
//                 message: 'password and confirmpassword do not match'
//             });
//         }

//         try {
//             const hashedPassword = await bcrypt.hash(password, 10);
//             const newUser = await users.create({
//                 firstname,
//                 lastname,
//                 email,
//                 phone,
//                 password: hashedPassword
//             });
//             res.status(201).json({ message: "Account created successfully", user: newUser });
//         } catch (error) {
//             console.error('Error creating user:', error);
//             res.status(500).json({ message: "Error creating user" });
//         }
//     },

//     login: async(req, res) => {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ message: 'Email and password are required' });
//         }

//         try {
//             const user = await users.findOne({ email });
//             if (!user) {
//                 return res.status(401).json({ message: 'Invalid email or password' });
//             }

//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch) {
//                 return res.status(401).json({ message: 'Invalid email or password' });
//             }

//             res.json({ message: "Login successful" });
//         } catch (error) {
//             console.error('Error logging in:', error);
//             res.status(500).json({ message: 'Error logging in' });
//         }
//     }
// };