import express from "express";
import {
  getCategories,
  getProductBySlug,
  getProducts,
  searchProducts,
} from "../controllers/products.js";
import Product from "../models/ProductsModel.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/search", searchProducts);

productRouter.get("/categories", getCategories);

productRouter.get("/slug/:slug", getProductBySlug);

productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});
export default productRouter;
