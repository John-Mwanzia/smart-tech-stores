import express from 'express';
const stripeRouter = express.Router();

stripeRouter.post('/', async (req, res) => {
    const { lineItems } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: `${process.env.STRIPE_SUCCESS_URL}`,
        cancel_url: `${process.env.STRIPE_CANCEL_URL}`,
    });
    res.json({ id: session.id });
    }
);