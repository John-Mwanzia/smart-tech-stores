import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../store";
import axios from "axios";

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
      `http://localhost:3000/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    } else ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
    // navigate("/cart")
  };

  return (
    <div>
      <div className="card">
        <div>
          <Link to={`/products/slug/${product.slug}`}>
            <img
              src={product.Img_Url}
              alt={product.Comp_Name}
              className="images"
            />
          </Link>
        </div>
        <div>
          <div>
            <Link to={`/products/slug/${product.slug}`}>
              {product.Comp_Name}
            </Link>
          </div>
          <div> Price: KSh.{product.price}</div>

          <button onClick={() => updateCart(product)} className="mb-1">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
