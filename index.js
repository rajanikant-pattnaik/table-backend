import express from "express";
import connectDb from "./dbConfig.js"
import dotenv from "dotenv"
import cors from 'cors'
import router from "./router/table.js";
dotenv.config();
connectDb();


const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/v1',router)

app.listen(4000,()=>{
    console.log(`server running at port ${4000}`);
})
