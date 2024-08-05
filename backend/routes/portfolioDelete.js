const express = require('express')
const userModels = require('../model/imageP')
const router = express.Router()


router.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await userModels.deleteOne({ _id: id });
        res.json({ success: true, message: 'Data deleted successfully', data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});
module.exports = router;