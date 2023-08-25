import React, { useContext } from 'react'
import { Store } from '../store';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const StripeCheckoutScreen = async()=> {
  const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY)
  const { state} = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  console.log(cartItems);

  const lineItems = cartItems.map((item) => {
    return {
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.Gadget_Name || item.Comp_Name,
          images: [item.Img_Url],
        },
        unit_amount: item.price * 100, // Stripe expects the price in a currencies smallest unit
      },
      quantity: item.quantity,
    }
  })
//https://smart-server.vercel.app/api/checkout
  const {data} = await axios.post("http://localhost:3000/api/checkout", {
    lineItems,
  });
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    sessionId: data.id,
  });
  if (error) {
    alert(error.message);
  }

  
  return (
    <div> 
       <h1>
        Paypal Checkout
       </h1>
    </div>
  )
}

export default StripeCheckoutScreen