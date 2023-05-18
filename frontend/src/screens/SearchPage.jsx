import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Product from "../components/product";
import SearchBar from "../components/SearchBar";
import { Button, Card } from "react-bootstrap";


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
        const { data } = await axios.get(
          "http://localhost:3000/api/products/categories"
        );
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
    <div className="flex mt-16 relative gap-8 justify-center">
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
            <div className="absolute top-[-50px] left-1/2">
              {countProducts === 0 ? "No" : countProducts} Results
              {query !== "all" && " : " + query}
              {category !== "all" && " : " + category}
              {query !== "all" || category !== "all" ? (
                <button
                  className="btn"
                  onClick={() => navigate("/search")}
                >
                  Clear
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>

      <div className="flex justify-center px-4 gap-6">
        {products.length === 0 && <h2> No Product Found </h2>}
        {products.map((product) => (
          
          <Card className="card">
            <Link to={`/products/slug/${product.slug}`}>
              <Card.Img
                src={product.Img_Url}
                alt={product.Comp_Name}
                className="images"
              />
            </Link>
            <Card.Body>
              <Card.Title>
                <Link to={`/products/slug/${product.slug}`}>
                  {product.Comp_Name}
                </Link>
              </Card.Title>
              <Card.Text> Price: KSh.{product.price}</Card.Text>

              <Button
                variant="warning"
                onClick={() => updateCart(product)}
                className="mb-1"
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
}


