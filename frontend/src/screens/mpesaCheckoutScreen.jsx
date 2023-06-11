import React from "react";

export default function MpesaCheckoutScreen() {
  return (
    <>
      <div className=" flex items-center justify-center  bg-gradient-to-br from-[#dbc596] to-[#70a24f] h-screen">
          <div className="h-[85%]">
              <img src="/images/mpesaCheckout/lambs.svg" alt="lambs" className="h-[95%]"   />
          </div>
          <div className="bg-white">
              <h1 className="text-[56px] font-semibold">Checkout</h1>
              <p className="text-xl">
              Please complete  the purchase by providing payment details
              </p>
          </div>
      </div>
    </>
  );
}
