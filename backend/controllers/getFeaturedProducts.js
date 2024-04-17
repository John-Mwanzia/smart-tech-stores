import expressAsyncHandler from "express-async-handler";
import FeaturedProducts from "../models/featuredProductsModel.js";

export const getFeaturedProducts = async (req, res) => {
  const products = await FeaturedProducts.find({});
  res.send(products);
};

export const featuredCategories = expressAsyncHandler(async (req, res) => {
  // Retrieve all distinct categories from the products collection
  const categories = await FeaturedProducts.find().distinct("category");

  // Send the categories as a response
  res.send(categories);
});

export const featuredProductBySlug = async (req, res) => {
  const product = await FeaturedProducts.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
};

export const featuredProductById = async (req, res) => {
  const product = await FeaturedProducts.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
};
