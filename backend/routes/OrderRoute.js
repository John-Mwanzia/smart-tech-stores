import express from 'express'
import Order from '../models/orderModel'

const orderRouter = express.Router()

orderRouter.post('/', expressAsyncHandler(async(req, res)=>{
    console.log(req.body);
    const newOrder = await Order({

    })
}))