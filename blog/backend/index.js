const express= require('express');
const app = express();
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const port=8080;
 app.use(cors());
 require('dotenv').config();
 require('./db');
 app.use(bodyParser.json());
 app.get('/',(req,res)=>{
    res.send('Hello World');
 });
 app.listen (port,()=>{
    console.log(`Server is running on port ${port}`);
 });  