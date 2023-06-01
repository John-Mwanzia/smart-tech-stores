import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
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
          "https://smart-tech-server.onrender.com/api/featuredProducts"
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
      `https://smart-tech-server.onrender.com/api/featuredProducts/${item._id}`
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
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold mb-4">Featured products</h1>
        <div className="flex flex-wrap  gap-8 justify-center mb-24">
          {products.slice(0, 4).map((product) => {
            return (
              <div
                key={product.Gadget_Name}
                className="flex-1 max-w-[322px] max-h-[332px]  "
              >
                <div className="card ">
                  <Link to={`/featuredProducts/slug/${product.slug}`}>
                    <img
                      src={product.Img_Url}
                      alt={product.Gadget_Name}
                      className="images max-h-[200px] mx-auto "
                    />
                  </Link>
                  <div className="text-center pt-8">
                    <div>
                      <Link to={`/featuredProducts/slug/${product.slug}`}>
                        {product.Gadget_Name}
                      </Link>
                    </div>
                    <div> Price: KSh.{product.price}</div>

                    <button
                      onClick={() => updateCart(product)}
                      className="mb-1 mt-2 btn  bg-yellow-400 hover:bg-yellow-500"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}


          
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-6">
          {products.slice(4, 8).map((product) => {
            return (
              <div
                key={product.Gadget_Name}
                className="flex-1 max-w-[322px] max-h-[332px]"
            
              >
                <div className="card">
                  <Link to={`/featuredProducts/slug/${product.slug}`}>
                    <img
                      src={product.Img_Url}
                      alt={product.Gadget_Name}
                      className="images max-h-[210px] mx-auto" 
                    />
                  </Link>
                  <div className="text-center pt-8">
                    <div>
                      <Link to={`/featuredProducts/slug/${product.slug}`}>
                        {product.Gadget_Name}
                      </Link>
                    </div>
                    <div> Price: KSh.{product.price}</div>

                    <button
                      onClick={() => updateCart(product)}
                      className="mb-1 mt-2 btn bg-yellow-400 hover:bg-yellow-500"
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
