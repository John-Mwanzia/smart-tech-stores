import express from "express";
import { stripeSession } from "../controllers/stripe";
const stripeRouter = express.Router();

stripeRouter.post("/", stripeSession);

export default stripeRouter;
