import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Product from "../components/product";
import SearchBar from "../components/SearchBar";
import { Button } from "react-bootstrap";

const initialState = {
  loading: true,
  products: [],
  error: "",
};

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
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const query = sp.get("query")|| "all";
  const category = sp.get("category" ) || "all";

  const [{ loading, error, products, countProducts }, dispatch] = useReducer(
    reducer,
    initialState
  );

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

  const getFilterUrl = (filter) => {
    const filterQuery = filter.query || query;
    const filterCategory = filter.category || category;
    return `/search?query=${filterQuery}&category=${filterCategory}`;
  };

  return (
    <div>
      <h2>Filter</h2>
      <div>
        <h3>Categories</h3>
        <ul>
          <li>
            <Link
              className={"all" === category ? "active" : ""}
              to={getFilterUrl({ category: "all" })}
            >
              Any
            </Link>
          </li>

          {categories.map((c) => (
            <li key={c}>
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

      <div className="col-9">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>
            <h2> {error}</h2>
          </div>
        ) : (
          <>
            <div>
              {countProducts === 0 ? "No" : countProducts} Results
              {query !== "all" && " : " + query}
              {category !== "all" && " : " + category}
              {query !== "all" || category !== "all" ? (
                <Button
                  variant="light"
                  className="btn btn-light"
                  onClick={() => navigate("/search")}
                >
                  Clear
                </Button>
              ) : null}
            </div>
          </>
        )}

        {products.length === 0 && <h2> No Product Found </h2>}


        <div>
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
}
