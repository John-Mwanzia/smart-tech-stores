import React from "react";
import { Helmet } from "react-helmet-async";

export default function ShippingPage() {
  return (
    <div>
      <Helmet>
        <title>Shipping </title>
      </Helmet>

      <div>
        <h1>Shipping</h1>
        <form className="flex flex-col max-w-[400px] ">
          <div className="flex flex-col">
            <label>Full Name</label>
            <input type="text" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label>Phone Number</label>
            <input type="text" className="border-2" />
          </div>
          <div className="flex flex-col">
            <label>Address</label>
            <input type="text" className="border-2"/>
          </div>
          <div className="flex flex-col">
            <label>City</label>
            <input type="text" className="border-2" />
          </div>
        </form>
      </div>
    </div>
  );
}
