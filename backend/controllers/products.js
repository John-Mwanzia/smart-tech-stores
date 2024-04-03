import expressAsyncHandler from "express-async-handler";
import Product from "../models/ProductsModel";

export const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

export const searchProducts = expressAsyncHandler(async (req, res) => {
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
  const products = await Product.find({
    ...categoryFilter,
    ...queryFilter,
  });

  // Count the number of products that match the query and category filters
  const countProducts = await Product.countDocuments({
    ...categoryFilter,
    ...queryFilter,
  });
  // Send the products and their count as a response
  res.send({
    products,
    countProducts,
  });
});

export const getCategories = expressAsyncHandler(async (req, res) => {
  // Retrieve all distinct categories from the products collection
  const categories = await Product.find().distinct("category");

  // Send the categories as a response
  res.send(categories);
});

export const getProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
};
