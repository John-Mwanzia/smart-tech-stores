import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const StripeCheckoutScreen = () => {
  const stripePromise = loadStripe(
    import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
  );
  const { state } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const lineItems = cartItems.map((item) => {
        return {
          price_data: {
            currency: "kes",
            product_data: {
              name: item.Gadget_Name || item.Comp_Name,
              images: [item.Img_Url],
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      });

      try {
        const { data } = await axios.post(
          "https://smart-server.vercel.app/api/checkout",
          {
            lineItems,
          }
        );

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.id,
        });

        if (error) {
          alert(error.message);
        }
      } catch (error) {
        console.error("Error:", error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <h1>Paypal Checkout</h1>}</div>;
};

export default StripeCheckoutScreen;
