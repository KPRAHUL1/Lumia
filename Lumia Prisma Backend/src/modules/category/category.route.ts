import { addCategory,deleteAllCategories,getAllCategory,updateCategory } from "./category.service";
import multer from "multer";
import path from "path";

const express = require('express');
const router = express.Router();

router.post("/", async (req: any, res: any) => {
    const payload = req.body;
    const result = await addCategory(payload);
    res.status(201).json(result);
  });
  
  router.get("/", async (req: any, res: any) => {
    const response = await getAllCategory();
    res.status(200).json(response);
  });
  router.put('/:id',async(req:any, res: any) => {
    const id =req.params.id
    const payload= req.body;
    const result = await updateCategory(id,payload);
    res.status(200).json(result)
})
router.delete('/:id', async(req:any, res:any)=>{
  const id =req.params.id
  await deleteAllCategories(id)
  res.status(200).json("Deleted successfully")
})

  module.exports = router;