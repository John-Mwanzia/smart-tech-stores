import express from "express";
import Product from "../models/ProductsModel.js";
import data from "../data.js";
import FeaturedProducts from "../models/featuredProductsModel.js";
import User from "../models/userModel.js";
import { seed } from "../controllers/seed.js";

const seedRouter = express.Router();

seedRouter.get("/", seed);

export default seedRouter;
