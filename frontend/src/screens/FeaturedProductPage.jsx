import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
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

export default function FeaturedProductPage() {
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
          `https://smart-server.vercel.app/api/featuredProducts/slug/${slug}`
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
      `https://smart-server.vercel.app/api/featuredProducts/${product._id}`
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
        <meta name="description" content="individual product page " />
      </Helmet>
      <Header />
      <h1 className="text-3xl  lg:text-5xl font-sans text-center lg:text-left  lg:ml-[273px]  mt-20 mb-16">
        {product.Gadget_Name}
      </h1>
      <div>
        <div className="mt-4 flex flex-wrap gap-12 justify-center pb-8">
          <div>
            <img
              src={product.Img_Url}
              alt={product.Gadget_Name}
              className="lg:max-w-[470px]"
            />
          </div>
          <div>
            <div className="px-4">
              <h1 className="text-3xl  lg:text-5xl font-sans text-center lg:text-left mb-5 ">
                Description
              </h1>
              <div>
                <h4 className="font-sans border-b text-center lg:text-left pb-2">
                  {product.Gadget_Name}
                </h4>
              </div>
              <div className="max-w-[500px]">
                {" "}
                <strong>Specs:</strong> {product.Specs}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="border py-2 px-8 rounded-t-md">
                Price: Ksh. {product.price}
              </div>
              <div className="mb-1 flex border py-2 px-8 gap-2">
                Status:{" "}
                {product.countInStock > 0 ? (
                  <div className="bg-successGreen rounded px-2">Available</div>
                ) : (
                  <div bg="danger">out of stock</div>
                )}
              </div>
              <div className="grid ">
                <button
                  className="mb-1 mt-2 py-2 px-5 btn  bg-yellow-400 hover:bg-yellow-500 "
                  onClick={addToCart}
                >
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
