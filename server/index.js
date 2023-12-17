import express from 'express'
import dotenve from 'dotenv'
import mongoose from 'mongoose';
dotenve.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000

// importing 
import healthgetAPI from './controlers/health.js';
import { adminPostAPI,AdminLogin } from './controlers/admins.js';

const connectMongoDB = async ()=>{
const conn = await mongoose.connect(process.env.MONGODB_URI);
if(conn){
    console.log("connected to mongo db");
}
}
connectMongoDB();

// creating health api

app.get('/api/v1/healths',healthgetAPI);

//creating signup api

app.post('/api/v1/admins' , adminPostAPI)

app.post('/api/v1/login' , AdminLogin)

app.listen(PORT , ()=>{
    console.log("server is running ");
   
})