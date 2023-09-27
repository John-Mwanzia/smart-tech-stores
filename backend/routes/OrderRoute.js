import express from "express";
import Order from "../models/orderModel.js";
import expressAsyncHandler from "express-async-handler";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    console.log(req.body);
    const newOrder = await Order({});
  })
);

export default orderRouter;
