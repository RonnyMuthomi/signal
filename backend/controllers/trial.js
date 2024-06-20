const mongoose = require('mongoose');
const fresh = require('../model/trial')

const formdata = async(req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        res.status(400).json({ message: 'missing attributes' })
        console.log('missing attribute')
    }

    try {
        const newUser = new fresh({
            username,
            email,
            password
        })

        await newUser.save();

        res.status(200).json({ message: "success" })
        console.log('success')

    } catch (error) {
        res.status(500).json({ message: "Error:" + error })
        console.error(error);

    }
}

module.exports = formdata;