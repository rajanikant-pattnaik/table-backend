import express from "express"
import { addToTable, deleteTable, updateTable } from "../controllers/table.js";

const router=express.Router();

router.post('/add',addToTable)
router.post('/update',updateTable);
router.post('/delete',deleteTable);

export default router;