import FeaturedProducts from "../models/featuredProductsModel.js";

export const getFeaturedProducts = async (req, res) => {
  const products = await FeaturedProducts.find({});
  res.send(products);
};
