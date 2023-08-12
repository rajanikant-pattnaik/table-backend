import { table } from "../models/table.js";
export const addToTable=async(req,res)=>{
    try {
        const {Name,PhoneNo,Email,Hobbies}=req.body;
        const newTable=new table({
            Name,PhoneNo,Email,Hobbies
        })
        const getTable=await newTable.save();
        return res.status(201).json({
            success:true,
            newTable
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateTable=async(req,res)=>{
    try{const {_id,Name,PhoneNo,Email,Hobbies}=req.body;
    const currTable=await table.findById(_id);
    const resp=await currTable.updateOne({Name,PhoneNo,Email,Hobbies});
    return res.status(201).json(
        {
            message:"updated successfully",
            resp
        }
    )}
    catch(error){
        console.log(error);
    }

}

export const deleteTable=async(req,res)=>{
    try {
        const {_id}=req.body;
        const deletedTable=await table.findById(_id);
        await deletedTable.deleteOne();
        return res.status(201).json({
            message:"deleted successfully",
            deletedTable
        })
    } catch (error) {
        console.log(error);
    }
}