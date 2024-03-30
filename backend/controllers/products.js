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
