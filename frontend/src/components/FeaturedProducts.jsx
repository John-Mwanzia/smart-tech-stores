import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../store";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-REQUEST":
      return { ...state, loading: true };
    case "FETCH-SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH-FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function FeaturedProducts() {
  const [{ products, loading, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  const { state, dispatch: ctxdispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;

  // const [state, Dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        const results = await axios.get(
          "http://localhost:3000/api/featuredProducts"
        );
        dispatch({ type: "FETCH-SUCCESS", payload: results.data });
      } catch (error) {
        dispatch({ type: "FETCH-FAILURE", error: error });
      }

      //  setproducts(results.data)
    };
    fetchData();
  }, []);

  const updateCart = async (item) => {
    const existItem = cartItems.find((item) => {
      item._id;
    });
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(
      `http://localhost:3000/api/featuredProducts/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    } else ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
    // navigate("/cart")
  };

  return (
    <div>
      <div>
        <h1>Featured products</h1>
        <div className="flex flex-wrap space-x-12 justify-center">
          {products.map((product) => {
            return (
              <div
                key={product.Gadget_Name}
            
              >
                <div className="card">
                  <Link to={`/featuredProducts/slug/${product.slug}`}>
                    <img
                      src={product.Img_Url}
                      alt={product.Gadget_Name}
                      className="images"
                    />
                  </Link>
                  <div>
                    <div>
                      <Link to={`/featuredProducts/slug/${product.slug}`}>
                        {product.Gadget_Name}
                      </Link>
                    </div>
                    <div> Price: KSh.{product.price}</div>

                    <button
                      onClick={() => updateCart(product)}
                      className="mb-1 btn"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
