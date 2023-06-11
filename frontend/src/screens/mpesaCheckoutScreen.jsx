import React from "react";

export default function MpesaCheckoutScreen() {
  return (
    <>
      <div className=" flex items-center justify-center  bg-gradient-to-br from-[#dbc596] to-[#70a24f] h-screen">
        <div className="h-[85%]">
          <img
            src="/images/mpesaCheckout/lambs.svg"
            alt="lambs"
            className="h-[95%]"
          />
        </div>
        <div className="bg-white">
          <h1 className="text-[56px] font-semibold">Checkout</h1>
          <p className="text-xl">
            Please complete the purchase by providing payment details
          </p>
          <div>
            <img
              src="/images/mpesaCheckout/mpesa.svg"
              alt="mpesa"
              className=""
            />
          </div>
          <div>
            <form>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border-2 border-gray-300 rounded-md p-2"
              />
            </form>
          </div>
          <div>
            <div>
              <span>SubTotal</span>
              <span>Ksh. 10000</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>Ksh. 200</span>
            </div>
            <div>
              <span>Total</span>
              <span>Ksh. 10200</span>
            </div>
          </div>
          <div>
            <button className="bg-[#B85E1F] text-white rounded-md p-2">
              Pay ksh. 10200
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
