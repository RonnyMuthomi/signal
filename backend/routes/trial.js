const express = require('express')
const router = express.Router();
const usercontroller = require('../controllers/trial')

router.post('/create', usercontroller);

module.exports = router