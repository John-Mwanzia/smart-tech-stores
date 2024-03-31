import express from "express";
import {
  getCategories,
  getProducts,
  searchProducts,
} from "../controllers/products.js";
import Product from "../models/ProductsModel.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/search", searchProducts);

productRouter.get("/categories", getCategories);

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
