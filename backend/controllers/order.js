import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

export const createOrder = expressAsyncHandler(async (req, res) => {
    const newOrder = await Order({
      orderItems: req.body.orderItems,
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user,
      isPaid: req.body.isPaid,
      paidAt: req.body.paidAt,
      isDelivered: req.body.isDelivered,
      deliveredAt: req.body.deliveredAt,
    });
    const createdOrder = await newOrder.save();
    res.status(201).json({ message: "New Order Created", order: createdOrder });
  })