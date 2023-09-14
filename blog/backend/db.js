const PORT=8000
const mongoose= require('mongoose')
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI, {
    dbname: process.env.DBNAME,}).then(()=>console.log("database connected"))
    .catch((err)=>console.log(err));