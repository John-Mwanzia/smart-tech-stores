import express  from "express";
import data from "./data.js";

const app = express();

app.get('/api/products', (req,res)=>{
   res.send(data.products);
});


app.listen(3000,  (error) =>{
    if(!error)
        console.log("Server  Successfully started on port 3000")
    else 
        console.log("Error occurred, server can't start", error);
    });