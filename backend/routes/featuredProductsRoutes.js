import express from 'express';
import FeaturedProducts from '../models/featuredProductsModel.js';

const featuredProductsRouter = express.Router();

featuredProductsRouter.get('/', async (req,res)=>{
    const products =  await FeaturedProducts.find({});
    res.send(products);
  });

  
  featuredProductsRouter.get('/slug/:slug', async(req,res)=>{
    const product = await FeaturedProducts.findOne({slug: req.params.slug});
    if(product){
     res.send(product);
    }else{
     res.status(404).send({message: "product not found"});
    }
     
  });
  
  
  
  featuredProductsRouter.get('/:id', async(req,res)=>{
      const product = await FeaturedProducts.findById(req.params.id);
      if(product){
       res.send(product);
      }else{
       res.status(404).send({message: "product not found"});
      }
       
    });

  export default featuredProductsRouter;