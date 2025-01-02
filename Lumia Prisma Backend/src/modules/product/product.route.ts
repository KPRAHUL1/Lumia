import { addProduct, getAllProduct } from "./product.service";

const express = require('express');
const router = express.Router();

router.post("/", async (req: any, res: any) => {
    const payload = req.body;
    const result = await addProduct(payload);
    res.status(201).json(result);
  });

  router.get("/", async (req: any, res: any) => {
    const response = await getAllProduct();
    res.status(200).json(response);
  });
module.exports=router;