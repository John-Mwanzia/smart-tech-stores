import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/header";
import { Store } from "../store";


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
      `http://localhost:3000/api/products/${item._id}`
    );
    if (data.countInStock < quantity) {
      window.alert(" Sorry, the product is out of stock");
      return;
    } else ctxdispatch({ type: "ADD-TO-CART", payload: { ...item, quantity } });
    // navigate("/cart")
  };

   // Fetch the search results from the backend API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(
          `http://localhost:3000/api/products/search?query=${query}&category=${category}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [query, category]);
  const [categories, setCategories] = useState([]);
  // Fetch the list of categories from the backend API when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch the categories from both the endpoints
          let urls = [
            "http://localhost:3000/api/products/categories",
            "http://localhost:3000/api/featuredProducts/categories",
          ];
          const requests = urls.map((url) => axios.get(url));

        const response = await axios.all([...requests ]);
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
    <Header />
    <div className="flex mt-16 relative gap-8 justify-center flex-wrap">
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
          <div>Loading...</div>
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

      <div className="flex justify-center px-4 gap-6 flex-wrap">
        {products.length === 0 && <h2> No Product Found </h2>}
        {products.map((product) => (
          
          <div className="card">
            <Link to={`/products/slug/${product.slug}`}>
              <img
                src={product.Img_Url}
                alt={product.Comp_Name}
                className="images"
              />
            </Link>
            <div className="text-center pt-4">
              <div>
                <Link to={`/products/slug/${product.slug}`}>
                  {product.Comp_Name}
                </Link>
              </div>
              <div> Price: KSh.{product.price}</div>

              <button
                onClick={() => updateCart(product)}
                className="mb-1 btn bg-yellow-400 hover:bg-yellow-500 "
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}


