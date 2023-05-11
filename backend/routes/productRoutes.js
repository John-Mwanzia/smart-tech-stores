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
    const category = req.query.category || "";
    const searchQuery = req.query.query || "";

    console.log('searchQuery:', searchQuery);
    console.log('category:', category);
    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? { Comp_Name: { $regex: searchQuery, $options: "i" } }
        : {};

        console.log('queryFilter:', queryFilter);

    const categoryFilter = category && category !== "all" ? { category } : {};
     console.log('categoryFilter:', categoryFilter);
    

    const products = await Product.find({
      ...categoryFilter,
      ...queryFilter,
    });

 console.log('products:', products);
    const countProducts = await Product.countDocuments({
      ...categoryFilter,
      ...queryFilter,
    });
    res.send({
      products,
      countProducts,

    });
  })
);

productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("category");
    console.log('categories:', categories);
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
