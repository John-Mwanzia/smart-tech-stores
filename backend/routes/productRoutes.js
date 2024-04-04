import express from "express";
import {
  getCategories,
  getProductById,
  getProductBySlug,
  getProducts,
  searchProducts,
} from "../controllers/products.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/search", searchProducts);

productRouter.get("/categories", getCategories);

productRouter.get("/slug/:slug", getProductBySlug);

productRouter.get("/:id", getProductById);
export default productRouter;
