import express  from "express";
import data from "./data.js";
import cors from "cors"
import mongoose from "mongoose";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import featuredProductsRouter from "./routes/featuredProductsRoutes.js";
// import seedfeaturedRouter from "./routes/seedfeaturedProductsRoutes.js";


const app = express();
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/ProductDB', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
  console.log("connected to db");
}).catch(err=> console.log(err));

app.use("/api/seed", seedRouter)
// app.use("/api/seedFeaturedProducts", seedfeaturedRouter)
app.use("/api/products", productRouter)
app.use("/api/featuredProducts", featuredProductsRouter)

app.listen(3000,  (error) =>{
    if(!error)
        console.log("Server  Successfully started on port 3000")
    else 
        console.log("Error occurred, server can't start", error);
    });