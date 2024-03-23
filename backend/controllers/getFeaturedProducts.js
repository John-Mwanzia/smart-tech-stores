import FeaturedProducts from "../models/featuredProductsModel";

export const getFeaturedProducts = async (req, res) => {
  const products = await FeaturedProducts.find({});
  res.send(products);
};
