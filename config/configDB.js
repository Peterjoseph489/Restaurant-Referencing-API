require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_DATABASE
mongoose.connect(url).then(()=>{
    console.log('Connected to database')
}).catch((error)=>{
    console.log(error.message)
})