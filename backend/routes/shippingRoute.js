import express from "express";
import { createShipping } from "../controllers/shipping.js";

const shippingRoute = express.Router();

shippingRoute.post("/", createShipping);

export default shippingRoute;
