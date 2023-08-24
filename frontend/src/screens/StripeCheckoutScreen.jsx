import React, { useContext } from 'react'
import { Store } from '../store';

export default function StripeCheckoutScreen() {

  const { state} = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  console.log(cartItems);
  return (
    <div> 
       <h1>
        Paypal Checkout
       </h1>
    </div>
  )
}
