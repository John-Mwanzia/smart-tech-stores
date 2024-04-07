import expressAsyncHandler from "express-async-handler";
import Shipping from "../models/ShippingModel";

export const createShipping = expressAsyncHandler(async (req, res) => {
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
});
