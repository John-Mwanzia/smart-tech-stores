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
        <form>
          <label>Full name</label>
          <input></input>
          <label>Address</label>
          <input></input>
          <label>City</label>
          <input></input>
        </form>
      </div>
    </div>
  );
}
