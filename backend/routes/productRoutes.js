import express from "express";
import expressAsyncHandler from "express-async-handler";
import { getProducts, searchProducts } from "../controllers/products.js";
import Product from "../models/ProductsModel.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/search", searchProducts);

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    // Retrieve all distinct categories from the products collection
    const categories = await Product.find().distinct("category");

    // Send the categories as a response
    res.send(categories);
  })
);

productRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});
export default productRouter;
