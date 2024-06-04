const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const dbconfig = require('../backend/config/db.congif.js')

const bodyParser = require('body-parser');
const userModels = require('../backend/model/user.js')


const app = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyParser.json());

//Read api

//http://localhost:8081/
app.get('/', async(req, res) => {
    const data = await userModels.find({})

    res.json({ success: true, data: data })
})

// create (post)

//http://localhost:8081/create
/*
  name,
  email,
  mobile,
*/
app.post('/create', async(req, res) => {
    console.log(req.body)
    const data = new userModels(req.body)
    await data.save()

    res.json({ success: true, message: 'data saved successfully', data: data })
})

// update data

//http://localhost:8081/create

/** 
 * {
 * id:""
 * name:""
 * email:""
 * mobile:""
 * }
 */
app.put('/update', async(req, res) => {
    console.log(req.body)
    const { id, ...rest } = req.body
    const data = await userModels.updateOne({ _id: id }, rest)
    console.log(rest)
    res.json({ success: true, message: 'data updated successfully', data: data })


})

// delete api

//http://localhost:8081/delete/id
app.delete('/delete/:id', async(req, res) => {
    const id = req.params.id
    console.log(id)
    const data = await userModels.deleteOne({ _id: id })
    res.json({ success: true, message: 'data deleted successfully', data: data })
})





//app.use('/api', userRouter);

const POST = process.env.POST || 8081

app.listen(POST, () => {
    console.log('server running');
})