import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store";

export default function MpesaCheckoutScreen() {

  const { state, dispatch: ctxDispatch } = useContext(Store);

   const { cart  } = state;
   const { cartItems } = cart;

   const subtotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
   const shippingPrice = subtotal < 10000 ? 0 :((subtotal*1.5)/100);
    const totalPrice = subtotal + shippingPrice;
  
  useEffect(() => {
   
    console.log(subtotal);
    console.log(shippingPrice);
    console.log(totalPrice);
  }, [state]);

  const [phoneNumber, setPhoneNumber] = useState("");
 
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className=" flex  items-center justify-center  bg-gradient-to-br from-[#dbc596] to-[#70a24f] h-screen">
        <div className="hidden sm:block">
          <img
            src="/images/mpesaCheckout/lambs.svg"
            alt="lambs"
            className="h-[747px]"
          />
        </div>
        <div className="bg-white text-center pb-8 max-w-[462px] px-4 ">
          <h1 className="text-[56px] font-semibold pt-[4px] ">Checkout</h1>
          <p className="text-[16px]">
            Please complete the purchase by providing payment details
          </p>
          <div className="mb-8 mt-4">
            <img
              src="/images/mpesaCheckout/mpesa.svg"
              alt="mpesa"
              className="mx-auto"
            />
          </div>
          <div>
            <form onClick={submitHandler} className="flex flex-col px-4">
              <label className=" text-left mb-2">
                Phone Number (to pay with)
              </label>
              <input
                type="text"
                required
                className="border-2 border-gray-300 rounded-md p-2"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
           

            <h2 className="mt-16 text-left mb-1">Purchase Summary</h2>
            <div className=" mb-12 bg-gray-100">
              <div className="flex justify-between max-w-xs mx-auto py-4 ">
                <span>SubTotal</span>
                <span>Ksh. 10000</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto py-4 ">
                <span>Delivery</span>
                <span> Ksh. 200</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto py-4">
                <span>Total</span>
                <span>Ksh. 10200</span>
              </div>
            </div>
            <div className="grid">
              <button type="submit" className="bg-[#B85E1F] text-white rounded-3xl py-4">
                Pay ksh. 10200
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
