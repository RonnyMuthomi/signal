const express = require('express')
const userModels = require('../model/imageP')
const router = express.Router()

router.put('/update', async(req, res) => {
    try {
        const { _id, ...rest } = req.body;
        const data = await userModels.updateOne({ _id: _id }, rest);
        res.json({ success: true, message: 'Data updated successfully', data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
module.exports = router