import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import { Store } from "../store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-REQUEST":
      return { ...state, loading: true };
    case "FETCH-SUCCESS":
      return { ...state, loading: false, product: action.payload };
    case "FETCH-FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const navigate = useNavigate();

  const [{ product, loading, error }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  // const [state, Dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        const results = await axios.get(
          `http://localhost:3000/api/products/slug/${slug}`
        );
        dispatch({ type: "FETCH-SUCCESS", payload: results.data });
      } catch (error) {
        dispatch({ type: "FETCH-FAILURE", payload: error.message });
      }

      //  setproducts(results.data)
    };
    fetchData();
  }, [slug]);

  //rename dispatch to context dispatch
  const { state, dispatch: ctxdispatch } = useContext(Store);
  const { cart } = state;

  const addToCart = async () => {
    const existItem = cart.cartItems.find((item) => {
      item._id;
    });
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${product._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    } else
      ctxdispatch({ type: "ADD-TO-CART", payload: { ...product, quantity } });
    navigate("/cart");
  };

  return (
    <div>
      <Helmet>
        <title>{slug}</title>
      </Helmet>
      <Header />
      <h1 className="px-4 mt-4">{product.Comp_Name}</h1>
      <div>
        <div className="mt-4">
          <div>
            <img
              src={product.Img_Url}
              alt={product.Comp_Name}
              className="product-img"
            />
          </div>
          <div>
            <div>
              <h1>Description</h1>
              <h4>Brand: {product.Brand}</h4>
              <h4>{product.Comp_Name}</h4>
              <h4>
                {" "}
                <strong>Specs:</strong> {product.Specs}
              </h4>
            </div>
          </div>
          <div>
            <div>
              <h4>Price: Ksh. {product.price}</h4>
              <h4 className="mb-1">
                Status:{" "}
                {product.countInStock > 0 ? (
                  <div>Available</div>
                ) : (
                  <div >out of stock</div>
                )}
              </h4>
              <div className="d-grid ">
                <button variant="warning" onClick={addToCart}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
