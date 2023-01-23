import express  from "express";
import data from "./data.js";
import cors from "cors"


const app = express();
app.use(cors())
app.get('/api/products', (req,res)=>{
   res.send(data.products);
});

app.get('/api/products/product/:comp_name', (req,res)=>{
   const product = data.products.findOne(req.params)
   if(product){
    res.send(product);
   }else{
    res.status(404).send("product not found")
   }
    
 });

app.listen(3000,  (error) =>{
    if(!error)
        console.log("Server  Successfully started on port 3000")
    else 
        console.log("Error occurred, server can't start", error);
    });