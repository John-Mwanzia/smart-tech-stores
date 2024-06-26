import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store";

export default function Product(props) {
  const { state, dispatch: ctxdispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;
  const { product } = props;

  const updateCart = async (item) => {
    const existItem = cartItems.find((item) => {
      item._id;
    });
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `https://smart-server.vercel.app/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    } else ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
  };

  return (
    <div>
      <div className="card shadow-lg bg-white">
        <div>
          <Link to={`/products/slug/${product.slug}`}>
            <img
              src={product.Img_Url}
              alt={product.Comp_Name}
              className="images"
            />
          </Link>
        </div>
        <div className="text-center pt-8">
          <div className="pb-2">
            <Link to={`/products/slug/${product.slug}`}>
              {product.Comp_Name}
            </Link>
          </div>
          <div> Price: KSh.{product.price}</div>

          <button
            // disable if product is already in cart and use a different color for the button
            disabled={cartItems.some((item) => item._id === product._id)}
            onClick={() => updateCart(product)}
            className={`mb-1 mt-2 py-2 px-5 btn
            ${
              cartItems.some((item) => item._id === product._id)
                ? "bg-gray-300 cursor-not-allowed"
                : "  bg-yellow-400 hover:bg-yellow-500 "
            } font-poppins`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
