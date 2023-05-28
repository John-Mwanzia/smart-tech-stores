import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";
import Product from "../components/Product";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

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

export default function Homepage() {
  // const [products, setproducts] = useState([])

  const [{ products, loading, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  // const [state, Dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        const results = await axios.get("http://localhost:3000/api/products");
        dispatch({ type: "FETCH-SUCCESS", payload: results.data });
      } catch (error) {
        dispatch({ type: "FETCH-FAILURE", error: error });
      }

      //  setproducts(results.data)
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Smart Tech Stores</title>
      </Helmet>
      <Header />
      <div className="bg-customGreen pb-4 pt-40">
        <div className="text-center left-8 top-32 lg:left-[780px] absolute lg:top-28">
          <label htmlFor="category-select">Select a category:</label>
          <select
            id="category-select"
            className="bg-transparent border border-gray-300 rounded-md px-4 py-2"
            name="category"
            onChange={(e) => {
              const selectedCategory = e.target.value;
              window.location.href = `/search?category=${selectedCategory}`;
            }}
          >
            <option value="laptops">Laptops</option>
            <option value="phones">Phones</option>
            <option value="chargers">Chargers</option>
            <option value="other-electronics">Other Electronics</option>
          </select>
        </div>

        <div className="flex justify-center gap-24  flex-col  lg:flex-row">
          <div>
            <div>
              <h1 className="font-sans font-bold text-3xl px-4  lg:px-0 lg:text-5xl ">
                Upgrade Your Tech with <br /> Our High-Quality <br />{" "}
                Accessories
              </h1>
            </div>
            <div className="mt-16 font-sans px-3 lg:px-0">
            <p>
              Discover a wide range of computer accessories to elevate your tech
              experience.
              <br /> From keyboards and mice to monitors and headsets, our
              e-commerce platform <br />
              has everything you need to take your computer setup to the next
              level. With our <br /> user-friendly interface and seamless
              checkout process, shopping for tech has <br />
              never been easier.
            </p>
            </div>

            <div className="pl-3 lg:pl-0">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 mt-8 rounded-3xl">
                Shop Now
              </button>
            </div>
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold mb-4">
          Laptops
        </h1>
        <div className="flex justify-center gap-8 flex-wrap">
          {products.map((product) => {
            return (
              <div key={product.Comp_Name}>
                <div>
                  <Product product={product} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 ">
        <FeaturedProducts />
      </div>
      {/* Features section */}
         <Features />
       {/*Testimonials section*/}
        <Testimonials />
      <Footer />
    </div>
  );
}
