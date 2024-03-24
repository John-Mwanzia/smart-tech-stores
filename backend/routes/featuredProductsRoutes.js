import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getFeaturedProducts } from "../controllers/getFeaturedProducts.js";
import { searchFeaturedProducts } from "../controllers/searchFeaturedProducts.js";
import FeaturedProducts from "../models/featuredProductsModel.js";

const featuredProductsRouter = express.Router();

featuredProductsRouter.get("/", getFeaturedProducts);

featuredProductsRouter.get("/search", searchFeaturedProducts);

featuredProductsRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    // Retrieve all distinct categories from the products collection
    const categories = await FeaturedProducts.find().distinct("category");

    // Send the categories as a response
    res.send(categories);
  })
);

featuredProductsRouter.get("/slug/:slug", async (req, res) => {
  const product = await FeaturedProducts.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

featuredProductsRouter.get("/:id", async (req, res) => {
  const product = await FeaturedProducts.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

export default featuredProductsRouter;
