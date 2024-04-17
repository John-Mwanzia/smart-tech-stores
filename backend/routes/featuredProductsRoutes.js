import express from "express";
import {
  featuredCategories,
  featuredProductById,
  featuredProductBySlug,
  getFeaturedProducts,
} from "../controllers/getFeaturedProducts.js";
import { searchFeaturedProducts } from "../controllers/searchFeaturedProducts.js";
import FeaturedProducts from "../models/featuredProductsModel.js";

const featuredProductsRouter = express.Router();

featuredProductsRouter.get("/", getFeaturedProducts);

featuredProductsRouter.get("/search", searchFeaturedProducts);

featuredProductsRouter.get("/categories", featuredCategories);

featuredProductsRouter.get("/slug/:slug",featuredProductBySlug );

featuredProductsRouter.get("/:id", featuredProductById);

export default featuredProductsRouter;
