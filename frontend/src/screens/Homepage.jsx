import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import Product from "../components/Product";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import HeroSection from "../components/HeroSection";
import { Loading, Grid } from "@nextui-org/react";

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
  const [{ products, loading, error }, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        const results = await axios.get(
          "https://smart-tech-server.onrender.com/api/products"
        );
        dispatch({ type: "FETCH-SUCCESS", payload: results.data });
      } catch (error) {
        dispatch({ type: "FETCH-FAILURE", error: error });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Smart Tech Stores</title>
        <meta
          name="description"
          content="Smart Tech Stores We sell the best products for cheap"
        />
      </Helmet>
      <Header />
      <HeroSection />

      <div className="mt-8">
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold mb-4">
          Laptops
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
          <div className="flex justify-center gap-8 flex-wrap mb-16">
            {products.map((product) => {
              return (
                <div key={product.Comp_Name}>
                  <div className=" w-[322px] max-h-[332px]">
                    <Product product={product} />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-8 mb-8 ">
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
