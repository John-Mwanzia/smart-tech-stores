import express from "express";
import Product from "../models/ProductsModel.js";
import expressAsyncHandler from "express-async-handler"

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

productRouter.get(
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
    console.log(products);
    console.log(countProducts);
  })
);

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
     // Retrieve all distinct categories from the products collection
    const categories = await Product.find().distinct("category");
   
      // Send the categories as a response
    res.send(categories);
  })
);

productRouter.get("/slug/:slug", async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});

productRouter.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "product not found" });
  }
});
export default productRouter;
