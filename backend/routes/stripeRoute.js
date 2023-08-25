import express from "express";
const stripeRouter = express.Router();
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

stripeRouter.post("/", async (req, res) => {
  const { lineItems } = req.body;
  console.log(lineItems);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.STRIPE_SUCCESS_URL}`,
      cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
    });
      return res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default stripeRouter;
