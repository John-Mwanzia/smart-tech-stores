import express from "express";
import FeaturedProducts from "../models/featuredProductsModel.js";
import expressAsyncHandler from "express-async-handler";

const featuredProductsRouter = express.Router();

featuredProductsRouter.get("/", async (req, res) => {
  const products = await FeaturedProducts.find({});
  res.send(products);
});

featuredProductsRouter.get(
  "/search",
  expressAsyncHandler(async (req, res) => {
    /* query is an object that has category and query properties */
    // Retrieve category and search query from the request's query string
    const category = req.query.category || "";
    const searchQuery = req.query.query || "";

    // Define a query filter based on the search query
    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? { Comp_Name: { $regex: searchQuery, $options: "i" } }
        : {};

    // Define a category filter based on the category

    const categoryFilter = category && category !== "all" ? { category } : {};

    // Find products that match the query and category filters
    const products = await FeaturedProducts.find({
      ...categoryFilter,
      ...queryFilter,
    });

    // Count the number of products that match the query and category filters
    const countProducts = await FeaturedProducts.countDocuments({
      ...categoryFilter,
      ...queryFilter,
    });
    // Send the products and their count as a response
    res.send({
      products,
      countProducts,
    });
  })
);

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
