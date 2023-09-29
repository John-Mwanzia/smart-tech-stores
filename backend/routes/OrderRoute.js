import express from "express";
import Order from "../models/orderModel.js";
import expressAsyncHandler from "express-async-handler";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const newOrder = await Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      isPaid: req.body.isPaid,
      paidAt: req.body.paidAt,
      isDelivered: req.body.isDelivered,
      deliveredAt: req.body.deliveredAt,
    });
    console.log(newOrder);
    const createdOrder = await newOrder.save();
  })
);

export default orderRouter;