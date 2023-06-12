import React, { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import axios from "axios";

export default function MpesaCheckoutScreen() {

  const { state, dispatch: ctxDispatch } = useContext(Store);

   const { cart  } = state;
   const { cartItems } = cart;

   const subtotal = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
   const shippingPrice = subtotal < 10000 ? 0 :((subtotal*1.5)/100);
    const totalPrice = subtotal + shippingPrice;
  

  const [phoneNumber, setPhoneNumber] = useState("");
  const [newNumber, setNewNumber] = useState("");
 
  const submitHandler = async (e) => {
    e.preventDefault();

    if(!phoneNumber.startsWith("01") && !phoneNumber.startsWith("07")){
      alert("Invalid number! Please start with '01' or '(07)'.");
      return;
    }
    
    
    if(phoneNumber.startsWith('0')){
       const proceccedPhoneNumber = phoneNumber.replace('0','254');
        setNewNumber(proceccedPhoneNumber);
    }
    else{
      const proceccedPhoneNumber = phoneNumber;
      setNewNumber(proceccedPhoneNumber);
    }

    console.log(newNumber);

    const result =  axios.post("http://localhost:3000/api/lipaNaMpesa/stkPush", {
      phoneNumber: newNumber,
      amount: totalPrice,
    });
    console.log(result);



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
            <form onSubmit={submitHandler} className="flex flex-col px-4">
              <label className=" text-left mb-2">
                Phone Number (to pay with)
              </label>
              <input
                type="text"
                required
                className="border-2 border-gray-300 rounded-md p-2"
                onChange={(e) => setPhoneNumber(e.target.value)}
                maxLength={10}
                minLength={10}
              />
           

            <h2 className="mt-16 text-left mb-1">Purchase Summary</h2>
            <div className=" mb-12 bg-gray-100">
              <div className="flex justify-between max-w-xs mx-auto py-4 ">
                <span>SubTotal</span>
                <span>Ksh. {subtotal}</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto py-4 ">
                <span>Delivery</span>
                <span> Ksh. {shippingPrice}</span>
              </div>
              <div className="flex justify-between max-w-xs mx-auto py-4">
                <span>Total</span>
                <span>Ksh. {totalPrice}</span>
              </div>
            </div>
            <div className="grid">
              <button type="submit" className="bg-[#B85E1F] text-white rounded-3xl py-4">
                Pay ksh {totalPrice}
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
