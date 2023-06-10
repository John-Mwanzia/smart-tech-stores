import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Store } from "../store";

export default function ShippingPage() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { shippingInfo } = state;

  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [fullname, setFullname] = useState(shippingInfo.fullname || "");
  const [phoneNumber, setPhoneNumber] = useState(
    shippingInfo.phoneNumber || ""
  );
  const [address, setAddress] = useState(shippingInfo.address || "");
  const [city, setCity] = useState(shippingInfo.city || "");
  const [postalCode, setPostalCode] = useState(shippingInfo.postalCode || "");

  const submitHandler = async (e) => {
    e.preventDefault();

    //https://smart-tech-server.onrender.com/api/shipping
    await axios.post("http://localhost:3000/api/shipping", {
      paymentMethod,
      fullname,
      phoneNumber,
      address,
      city,
      postalCode,
    });
    ctxDispatch({
      type: "SHIPPING_INFO",
      payload: {
        paymentMethod,
        fullname,
        phoneNumber,
        address,
        city,
        postalCode,
      },
    });

    localStorage.setItem(
      "shippingInfo",
      JSON.stringify({
        paymentMethod,
        fullname,
        phoneNumber,
        address,
        city,
        postalCode,
      })
    );

    if (paymentMethod === "mpesa") {
      navigate("/mpesaCheckout");
    } else {
      navigate("/payPalCheckout");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Shipping </title>
      </Helmet>

      <div className="flex justify-center h-screen  items-center">
        <div className="w-[900px]">
          <form className="w-full" onSubmit={submitHandler}>
            <div className="flex gap-x-16 justify-between flex-wrap bg-gray-100 pb-8 px-12 shadow-lg ">
              <div className="flex-1 space-y-4 pt-12">
                <div>
                  <h1 className="text-3xl font-sans font-semibold  mb-12">
                    Shipping information
                  </h1>
                </div>
                <div className="flex flex-col ">
                  <label>Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullname}
                    className="border-2 rounded-xl px-4 py-2"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    required
                    value={phoneNumber}
                    className="border-2 rounded-xl px-4 py-2"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Address</label>
                  <input
                    type="text"
                    required
                    value={address}
                    className="border-2 rounded-xl px-4 py-2"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label>City</label>
                  <input
                    type="text"
                    required
                    value={city}
                    className="border-2 rounded-xl px-4 py-2"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Postal code</label>
                  <input
                    type="text"
                    required
                    value={postalCode}
                    className="border-2 rounded-xl px-4 py-2"
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-12 flex-1 ">
                <h1 className="text-3xl font-sans font-semibold mb-12  ">
                  Payment method
                </h1>
                <div className="flex gap-x-4">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />
                  <label>
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/07/PayPal-Logo.png"
                      alt="paypal"
                      className="h-12"
                    />
                  </label>
                </div>
                <div className="flex gap-x-4">
                  <input
                    type="radio"
                    name="payment"
                    value="mpesa"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                  />
                  <label>
                    <img
                      src="../images/shipping/mpesa.svg"
                      alt="mpesa"
                      className="h-12"
                    />
                  </label>
                </div>
                <div className=" grid mt-8">
                  <button
                    type="submit"
                    className=" bg-indigo-700 text-white px-4 py-2 rounded-xl hover:bg-indigo-800"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
