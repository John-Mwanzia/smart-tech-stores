import express from "express";
import Shipping from "../models/ShippingModel.js";
import expressAsyncHandler from "express-async-handler";

const shippingRoute = express.Router();

shippingRoute.post(
  "/",
  expressAsyncHandler(async (req, res) => {
    const {
      paymentMethod,
      fullname,
      phoneNumber,
      address,
      city,
      postalCode,
    } = req.body;
    const newShipping = new Shipping({
      paymentMethod: paymentMethod,
      fullname: fullname,
      phoneNumber: phoneNumber,
      address: address,
      city: city,
      postalCode: postalCode,
    });

    const createdShipping = await newShipping.save();
    res
      .status(201)
      .send({ message: "Shipping Created", shipping: createdShipping });
  })
);

export default shippingRoute;
