import data from "../data.js";
import Product from "../models/ProductsModel.js";
import FeaturedProducts from "../models/featuredProductsModel.js";
import User from "../models/userModel.js";

export const seed = async (req, res) => {
  //remove all products first in the product model to prevent duplicates
  await Product.deleteMany({});

  const createdProducts = await Product.insertMany(data.products);
  //send data to the frontend

  // Featured products
  await FeaturedProducts.deleteMany({});

  const createdfeaturedProducts = await FeaturedProducts.insertMany(
    data.featuredProducts
  );
  //seed users
  await User.deleteMany({});

  const createdUsers = await User.insertMany(data.users);
  res.send({ createdProducts, createdfeaturedProducts, createdUsers });
};
