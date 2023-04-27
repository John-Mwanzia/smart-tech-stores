import express from "express"
import data from "../data.js";
import FeaturedProducts from "../models/featuredProductsModel.js";

const seedfeaturedRouter = express.Router();

seedfeaturedRouter.get("/", async(req, res)=>{
    //remove all products first in the product model to prevent duplicates
    
      await FeaturedProducts.deleteMany({});

  

    const createdfeaturedProducts =  await FeaturedProducts.insertMany(data.featuredProducts)
    //send data to the frontend
    res.send({createdfeaturedProducts})


})

export default seedfeaturedRouter;