import mongoose from "mongoose";

const tableSchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    PhoneNo:{
        type:String,
        unique:true
    },
    Email:{
        type:String,
        unique:true
    },
    Hobbies:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const table=mongoose.model('tables',tableSchema);