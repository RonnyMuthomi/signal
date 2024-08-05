require('dotenv').config();


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dbconfig = require('../backend/config/db.congif.js');
const portfolioRoutes = require('./routes/imageP.js');
const userModels = require('./model/signup');
const bookingRoutes = require('./routes/booking.js');
const mad = require('./routes/portfolio.js');
const trialRoutes = require('./routes/signup.js');
const loginRoutes = require('./routes/login.js')
const vendorauth = require('./routes/vendors')
const usersRoutes = require('./routes/getclient.js')
const getsvendorRoutes = require('./routes/getvendor.js')
const manageClientProfile = require('./routes/manageClientProfile.js')
const portfolioEdit = require('./routes/portfolioEdit.js')
const portfolioDelete = require('./routes/portfolioDelete.js')


const bodyparser = require('body-parser')
    // const createAdminAccount = require('./scripts/vendors.js')


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// createAdminAccount();
// Authentication Routes

// app.use('auth/reg', signupRoute)

// General CRUD routes
app.get('/', async(req, res) => {
    try {
        const data = await userModels.find({});
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.post('/create', async(req, res) => {
    try {
        const data = new userModels(req.body);
        await data.save();
        res.json({ success: true, message: 'Data saved successfully', data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.put('/update', async(req, res) => {
    try {
        const { _id, ...rest } = req.body;
        const data = await userModels.updateOne({ _id: _id }, rest);
        res.json({ success: true, message: 'Data updated successfully', data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await userModels.deleteOne({ _id: id });
        res.json({ success: true, message: 'Data deleted successfully', data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

app.use('/api/deletePortfolio', portfolioDelete)
app.use('/api/editPortfolio', portfolioEdit)
app.use('/api/clientprofile', manageClientProfile)
app.use('/api/event', getsvendorRoutes)
app.use('/api/val', usersRoutes)
app.use('/api/log', loginRoutes)
app.use('/api/two', trialRoutes);
app.use('/api/one', mad);
app.use('/api/bookings', bookingRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/ved', vendorauth);

// Server Start
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});