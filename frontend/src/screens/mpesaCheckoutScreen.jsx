import React from "react";

export default function MpesaCheckoutScreen() {
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
            <form className="flex flex-col px-4">
            <label className=" text-left mb-2">Phone Number (to pay with)</label>       
              <input
                type="text"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </form>
          </div>
          <div className="mt-24 mb-12">
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
          <div className="grid max-w-xs mx-auto">
            <button className="bg-[#B85E1F] text-white rounded-3xl py-4">
              Pay ksh. 10200
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
