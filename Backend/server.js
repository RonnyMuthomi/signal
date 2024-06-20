const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dbconfig = require('../backend/config/db.congif.js');
const portfolioRoutes = require('./routes/imageP.js');
const userModels = require('./model/user.js');
const bookingRoutes = require('./routes/booking.js');
const mad = require('./routes/portfolio.js');
const trialRoutes = require('./routes/trial.js');
const authMiddleware = require('./middleware/authMiddleware');
const authRoutes = require('./routes/auth');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// Authentication Routes
app.use('/api/auth', authRoutes);

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

// Protected Route Example
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

// Additional Routes
app.use('/api/two', trialRoutes);
app.use('/api/one', mad);
app.use('/api/bookings', bookingRoutes);
app.use('/api/portfolio', portfolioRoutes);

// Server Start
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});