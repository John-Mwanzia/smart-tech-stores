import express from "express"
import Product from "../models/ProductsModel.js";
import data from "../data.js";
import FeaturedProducts from "../models/featuredProductsModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async(req, res)=>{
    //remove all products first in the product model to prevent duplicates
      await Product.deleteMany({});

    const createdProducts =  await Product.insertMany(data.products)
    //send data to the frontend

// Featured products
    await FeaturedProducts.deleteMany({});

    const createdfeaturedProducts =  await FeaturedProducts.insertMany(data.featuredProducts)
    res.send({createdProducts,createdfeaturedProducts})
  



})

export default seedRouter;