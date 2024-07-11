const express = require('express');
const { createAdminAccount, upload } = require('../controllers/vendors'); // Adjust the path as needed
const cors = require('cors');
const authMiddleware = require('../utils/authMiddle');

const router = express.Router();

router.use(cors());

// Use multer middleware for the route handling file uploads
router.post('/blue', upload.single('image'), createAdminAccount);

module.exports = router;