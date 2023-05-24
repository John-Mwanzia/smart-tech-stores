import axios from "axios";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import { Store } from "../store";

export default function CartScreen() {
  const { state, dispatch: ctxdispatch } = useContext(Store);
  const { cart, userInfo } = state;
  const { cartItems } = cart;
  const navigate = useNavigate();
  console.log(userInfo);

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    }
    ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
  };

  const addCartHandler = async (item, quantity) => {
    const { data } = await axios.get(
      `http://localhost:3000/api/featuredProducts/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    }
    ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
  };

  const removeItemHandler = (item) => {
    ctxdispatch({ type: "REMOVE-CART-ITEM", payload: item });
  };

  return (
    <div>
      {/* <Header currentPage={currentPage} /> */}
      <Header />
      <Helmet>
        <title>Shopping cart</title>
      </Helmet>
      <div>
        <h1 className="mt-12 lg:mt-4 text-4xl text-center lg:text-left lg:pl-24">Shopping List</h1>

        <div className="flex justify-center gap-16 flex-wrap">
          <div>
            {cartItems.length === 0 ? (
              <Link to="/">Go to shopping</Link>
            ) : (
              <div className="flex flex-col border p-2 rounded-xl">
                {cartItems.map((item) => (
                  <div key={item._id} >
                    <div className="flex gap-2 lg:gap-28 justify-between items-center border-b pb-4  ">
                      <div className="flex flex-wrap items-center gap-4">
                        <img
                          src={item.Img_Url}
                          alt={item.Comp_Name}
                          className="img-fluid rounded  img-thumbnail"
                        ></img>{" "}
                        {"  "}
                        <Link to={`/product/${item.slug}`} className="text-blue-600 underline">
                          {item.Comp_Name || item.Gadget_Name}
                        </Link>
                      </div>
                      <div className="flex gap-4">
                        <button
                          variant="light"
                          disabled={item.quantity == 1}
                          onClick={() => {
                            updateCartHandler(item, item.quantity - 1);
                            addCartHandler(item, item.quantity - 1);
                          }}
                        >
                          {" "}
                          <i className="fas fa-minus-circle" />{" "}
                        </button>{" "}
                        <span>{item.quantity}</span>
                        <button
                          variant="light"
                          disabled={item.quantity == item.countInStock}
                          onClick={() => {
                            if (item.quantity < item.countInStock) {
                              updateCartHandler(item, item.quantity + 1);
                              addCartHandler(item, item.quantity + 1);
                            }
                          }}
                        >
                          {" "}
                          <i className="fas fa-plus-circle" />{" "}
                        </button>
                      </div>
                      <div md={3}>Ksh.{item.price}</div>
                      <div md={2}>
                        <button
                          variant="light"
                          onClick={() => removeItemHandler(item)}
                        >
                          {" "}
                          <i className="fas fa-trash" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            <div className="border py-4 px-8">
              <h3>
                Subtotal( {cartItems.reduce((a, c) => a + c.quantity, 0)} items)
                : Ksh. {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
              </h3>
              <button
                type="button"
                disabled={cartItems.length === 0}
                className=" bg-blue-500 text-white px-8 mt-4 py-2 w-full  rounded-xl"
                onClick={() => userInfo?navigate("/shipping"):navigate("/signin") }
              >
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
