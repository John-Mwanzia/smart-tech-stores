import express from "express"
import Product from "../models/ProductsModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get("/", async(req, res)=>{
    //remove all products first in the product model to prevent duplicates
      await Product.deleteMany({});

    const createdProducts =  await Product.insertMany(data.products)
    //send data to the frontend
    res.send({createdProducts})

})

export default seedRouter;