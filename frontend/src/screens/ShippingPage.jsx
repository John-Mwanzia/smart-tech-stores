import React from "react";
import { Helmet } from "react-helmet-async";

export default function ShippingPage() {
  return (
    <div>
      <Helmet>
        <title>Shipping </title>
      </Helmet>

      <div className="flex justify-center">
        <div className="w-[800px]">
          <form className="w-full">
            <div className="flex gap-x-16 justify-between flex-wrap">
              <div className="flex-1">
                <h1 className="text-3xl font-sans font-semibold mt-8 mb-8">
                  Shipping information
                </h1>
                <div className="flex flex-col ">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="border-2 rounded-xl px-4 py-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="border-2 rounded-xl px-4 py-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Address</label>
                  <input
                    type="text"
                    className="border-2 rounded-xl px-4 py-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>City</label>
                  <input
                    type="text"
                    className="border-2 rounded-xl px-4 py-2"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Postal code</label>
                  <input
                    type="text"
                    className="border-2 rounded-xl px-4 py-2"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-sans font-semibold mt-8 mb-8  ">
                  Payment method
                </h1>
                <div className="flex gap-x-4">
                  <input type="radio" name="payment" value="paypal" />
                  <label>
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"
                      alt="paypal"
                      className="h-12"
                    />
                  </label>
                </div>
                <div className="flex gap-x-4">
                  <input type="radio" name="payment" value="mpesa" />
                  <label>
                    <img
                      src="../images/shipping/mpesa.svg"
                      alt="mpesa"
                      className="h-12"
                    />
                  </label>
                </div>
                <div className=" grid mt-8">
                <button className=" bg-indigo-700 text-white px-4 py-2 rounded-xl">Continue</button>
            </div>
              </div>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
}
