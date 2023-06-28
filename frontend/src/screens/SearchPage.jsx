import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { Store } from "../store";
import { Helmet } from "react-helmet-async";
import { Grid, Loading } from "@nextui-org/react";

// Define the initial state for the reducer
const initialState = {
  loading: true,
  products: [],
  error: "",
};

//// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        countProducts: action.payload.countProducts,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function SearchPage() {
  const navigate = useNavigate();
  const { state, dispatch: ctxdispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;

  // Get the search query and category from the URL using useLocation hook
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const query = sp.get("query") || "all";
  const category = sp.get("category") || "all";

  // Use the reducer to manage the state of the component
  const [{ loading, error, products, countProducts }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const updateCart = async (item) => {
    const existItem = cartItems.find((item) => {
      item._id;
    });
    const quantity = existItem ? existItem.quantity + 1 : 1;

    const { data } = await axios.get(
      item.source && item.source.includes("/api/featuredProducts")
        ? `https://smart-tech-server.onrender.com${item.source}/${item._id}`
        : `https://smart-tech-server.onrender.com${item.source}/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    } else ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
    // navigate("/cart")
  };

  // Fetch the search results from the backend API when the component mounts
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });

        // Define the URLs for the product and featured product searches
        let urls = [
          `https://smart-tech-server.onrender.com/api/products/search?query=${query}&category=${category}`,
          `https://smart-tech-server.onrender.com/api/featuredProducts/search?query=${query}&category=${category}`,
        ];

        // Send parallel requests to retrieve data from the URLs
        const requests = urls.map((url) => axios.get(url));
        const responses = await axios.all([...requests]);

        // Extract data from the responses
        const data1 = responses[0].data;
        const data2 = responses[1].data;

        // Map the products and add the source property for products from the /api/products endpoint
        const products1 = data1.products.map((product) => ({
          ...product,
          source: "/api/products",
        }));

        // Map the products and add the source property for products from the /api/featuredProducts endpoint. This is done to distinguish between the two types of products in updating the cart
        const products2 = data2.products.map((product) => ({
          ...product,
          source: "/api/featuredProducts",
        }));

        // Combine the products and calculate the total count of products
        const data = {
          products: [...products1, ...products2],
          countProducts: data1.countProducts + data2.countProducts,
        };

        // Dispatch a success action with the retrieved products and count
        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            products: data.products,
            countProducts: data.countProducts,
          },
        });
      } catch (err) {
        // Dispatch a fail action if an error occurs during data retrieval
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };

    // Call the fetchData function when the query or category values change
    fetchData();
  }, [query, category]);

  const [categories, setCategories] = useState([]);
  // Fetch the list of categories from the backend API when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch the categories from both the endpoints
        let urls = [
          "https://smart-tech-server.onrender.com/api/products/categories",
          "https://smart-tech-server.onrender.com/api/featuredProducts/categories",
        ];
        const requests = urls.map((url) => axios.get(url));

        const response = await axios.all([...requests]);
        const data1 = response[0].data;
        const data2 = response[1].data;

        //placed the data from both the endpoints into one data array
        const data = [...data1, ...data2];
        setCategories(data);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchCategories();
  }, [dispatch]);

  // Helper function to get the filter URL for a given filter
  const getFilterUrl = (filter) => {
    const filterQuery = filter.query || query;
    const filterCategory = filter.category || category;
    return `/search?query=${filterQuery}&category=${filterCategory}`;
  };

  // Render the component
  return (
    <>
      <Helmet>
        <title>Smart Tech - Search Results</title>
        <meta name="description" content="Search Results" />
      </Helmet>
      <Header />
      <div className="flex mt-36 lg:mt-16 relative gap-8 justify-center flex-wrap pb-8">
        <div>
          <h1 className="text-4xl underline font-sans text-center  font-semibold mb-4">
            Categories
          </h1>
          <ul>
            <li className="border text-center">
              <Link
                className={"all" === category ? "active" : ""}
                to={getFilterUrl({ category: "all" })}
              >
                Any
              </Link>
            </li>

            {categories.map((c) => (
              <li key={c} className="border text-center">
                <Link
                  className={c === category ? "active" : ""}
                  to={getFilterUrl({ category: c })}
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {loading ? (
            <div>
            <Grid.Container className="flex justify-center" gap={2}>
            <Grid>
              <Loading type="gradient" />
            </Grid>
          </Grid.Container>
            </div>
          ) : error ? (
            <div>
              <h2> {error}</h2>
            </div>
          ) : (
            <>
              <div className="absolute top-[-50px] lg:left-1/2 left-16 flex items-center ">
                {countProducts === 0 ? "No" : countProducts} Results
                {query !== "all" && " : " + query}
                {category !== "all" && " : " + category}
                {query !== "all" || category !== "all" ? (
                  <button
                    className="btn ml-3"
                    onClick={() => navigate("/search")}
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center px-4 gap-y-12 gap-x-8  flex-wrap bg-zinc-100/10 pb-8">
          {products.length === 0 && <h2> No Product Found </h2>}
          <div className="flex flex-wrap gap-y-24 gap-x-8 justify-center mt-6">
          {products.map((product) => (
            <div className="card bg-white shadow-lg w-[322px]">
              <Link to={`/products/slug/${product.slug}`}>
                <img
                  src={product.Img_Url}
                  alt={product.Comp_Name}
                  className=" images max-h-[210px] mx-auto"
                />
              </Link>
              <div className="text-center pt-4 pb-2">
                <div>
                  <Link to={`/products/slug/${product.slug}`}>
                    {product.Comp_Name || product.Gadget_Name}
                  </Link>
                </div>
                <div> Price: KSh.{product.price}</div>

                <button
                  onClick={() => updateCart(product)}
                  className="mb-1 mt-2 py-2 px-5 btn  bg-yellow-400 hover:bg-yellow-500  "
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
