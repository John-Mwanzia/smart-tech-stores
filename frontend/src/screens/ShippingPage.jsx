import React from "react";
import { Helmet } from "react-helmet-async";

export default function ShippingPage() {
  return (
    <div>
      <Helmet>
        <title>Shipping </title>
      </Helmet>
      <h1 className="">Shipping information</h1>

      <div className="flex justify-center">
         <div className="w-[600px]">
         <form className="w-full">
          <div className="flex flex-col ">
            <label>Full Name</label>
            <input type="text" className="border-2 rounded-xl" />
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input type="text" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input type="text" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label>City</label>
            <input type="text" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label>Postal code</label>
            <input type="text" className="border-2" />
          </div>
        </form>
         </div>
      </div>
    </div>
  );
}
