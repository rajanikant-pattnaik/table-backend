import express from "express"
import { addToTable, deleteTable, getAllTable, updateTable } from "../controllers/table.js";

const router=express.Router();

router.post('/add',addToTable)
router.post('/update',updateTable);
router.post('/delete',deleteTable);
router.get('/getAll',getAllTable);

export default router;