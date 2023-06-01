import express  from "express";
import cors from "cors"
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import featuredProductsRouter from "./routes/featuredProductsRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config()
const app = express();

//convert form data in the post request to json object
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
  console.log("connected to db");
}).catch(err=> console.log(err));

app.use("/api/seed", seedRouter)
app.use("/api/products", productRouter)
app.use("/api/featuredProducts", featuredProductsRouter)
app.use("/api/users", userRouter)

app.use((err,req,res,next)=>{   
    res.status(500).send({message: err.message})
})

app.listen(3000,  (error) =>{
    if(!error)
        console.log("Server  Successfully started on port 3000")
    else 
        console.log("Error occurred, server can't start", error);
    });