import express  from "express";
import data from "./data.js";
import cors from "cors"


const app = express();
app.use(cors())
app.get('/api/products', (req,res)=>{
   res.send(data.products);
});
app.get('/api/featuredProducts', (req,res)=>{
  res.send(data.featuredProducts);
});

app.get('/api/product/:slug', (req,res)=>{
   const product = data.products.find(x => x.slug === req.params.slug);
   if(product){
    res.send(product);
   }else{
    res.status(404).send({message: "product not found"});
   }
    
 });

 app.get('/api/featuredProduct/:slug', (req,res)=>{
  const product = data.featuredProducts.find(x => x.slug === req.params.slug);
  if(product){
   res.send(product);
  }else{
   res.status(404).send({message: "product not found"});
  }
   
});

 app.get('/api/products/:id', (req,res)=>{
    const product = data.products.find(x => x._id === req.params.id);
    if(product){
     res.send(product);
    }else{
     res.status(404).send({message: "product not found"});
    }
     
  });

  app.get('/api/featuredProducts/:id', (req,res)=>{
    const product = data.featuredProducts.find(x => x._id === req.params.id);
    if(product){
     res.send(product);
    }else{
     res.status(404).send({message: "product not found"});
    }
     
  });

app.listen(3000,  (error) =>{
    if(!error)
        console.log("Server  Successfully started on port 3000")
    else 
        console.log("Error occurred, server can't start", error);
    });