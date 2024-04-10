import { Grid, Loading } from "@nextui-org/react";
import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
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
          "https://smart-server.vercel.app/api/featuredProducts"
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
      `https://smart-server.vercel.app/api/featuredProducts/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    } else ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[20%] xl:ml-[10%] 2xl:ml-[12%] font-semibold mb-12">
          Featured products
        </h1>

        {loading ? (
          <Grid.Container className="flex justify-center" gap={2}>
            <Grid>
              <Loading type="gradient" />
            </Grid>
          </Grid.Container>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="">
            <div className="flex flex-wrap  gap-y-24 gap-x-8 justify-center mb-24 ">
              {products.slice(0, 4).map((product) => {
                return (
                  <div
                    key={product.Gadget_Name}
                    className="w-full max-w-[322px] max-h-[332px]  "
                  >
                    <div className="card shadow-lg bg-white ">
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
                          // disable if product is already in cart and use a different color for the button
                          disabled={cartItems.some(
                            (item) => item._id === product._id
                          )}
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
              })}
            </div>
            <div className="flex flex-wrap gap-y-24 gap-x-8 justify-center mt-6">
              {products.slice(4, 8).map((product) => {
                return (
                  <>
                    <div
                      key={product.Gadget_Name}
                      className="w-full max-w-[322px] max-h-[332px]"
                    >
                      <div className="card shadow-lg  bg-white">
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
                            // disable if product is already in cart and use a different color for the button
                            disabled={cartItems.some(
                              (item) => item._id === product._id
                            )}
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
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
