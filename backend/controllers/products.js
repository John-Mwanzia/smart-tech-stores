import Product from "../models/ProductsModel";

export const getProducts =  async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  }