import React, { useEffect, useReducer, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";
import Product from "../components/Product";

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
      <div className="bg-customGreen pb-4">
        {/* <div>
          <ul className="d-flex flex-wrap justify-content-center mb-3 landing-list">
          <Link to="/search?category=laptops"> <li>laptops</li></Link>
          <Link to="/search?category=/phones"><li>phones</li></Link>
          <Link to="/search?category=/Chargers"><li>Chargers</li></Link>
          <Link to="/search?category=/other-Electronics"><li>other Electronics</li></Link>
           
            
            
         
          </ul>
        </div> */}

        <div className=" text-center left-1/2">
          <label htmlFor="category-select">Select a category:</label>
          <select
            id="category-select"
            className="bg-transparent border border-gray-300 rounded-md px-4 py-2"
            name="category"
          >
            <option value="laptops">Laptops</option>
            <option value="phones">Phones</option>
            <option value="chargers">Chargers</option>
            <option value="other-electronics">Other Electronics</option>
          </select>
        </div>

        <div className="flex justify-center gap-24 mt-20 flex-col  lg:flex-row">
          <div>
            <div>
              <h1 className="font-sans font-bold text-5xl">
                Upgrade Your Tech with <br /> Our High-Quality <br />{" "}
                Accessories
              </h1>
            </div>
            <div className="mt-16 text-xs">
              Discover a wide range of computer accessories to elevate your tech
              experience.
              <br /> From keyboards and mice to monitors and headsets, our
              e-commerce platform <br />
              has everything you need to take your computer setup to the next
              level. With our <br /> user-friendly interface and seamless
              checkout process, shopping for tech has <br />
              never been easier.
            </div>

            <div>
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
        <div className="flex justify-center space-x-8 flex-wrap">
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
      <div className="mt-12 mb-32">
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold mb-4">
          Features
        </h1>
        <div className="flex justify-center flex-wrap gap-8 mt-6">
          <div>
            <img
              src="/images/features/customizable-products.svg"
              alt="customizable-products"
              className="mx-auto"
            />
            <h1 className=" font-sans text-3xl font-semibold text-center  mb-4">
              customizable products
            </h1>
            <p className="text-center">
              we understand that everyone has unique needs and <br />{" "}
              preferences when it comes to technology products.
              <br />
              That's why we offer a wide range of customizable <br /> products
              that can be tailored to your exact <br /> specifications
            </p>
          </div>
          <div>
            <img
              src="/images/features/delivery.svg"
              alt="customizable-products"
              className="mx-auto"
            />
            <h1 className=" font-sans text-3xl font-semibold text-center  mb-4">
              Fast Delivery
            </h1>
            <p className="text-center">
              we offer lightning-fast delivery options, with same-day <br />
              and next-day delivery available for many products. <br />
              Plus, our delivery team is dedicated to making sure <br />
              your order arrives on time and in perfect condition <br />
            </p>
          </div>
          <div>
            <img
              src="/images/features/warranty.svg"
              alt="customizable-products"
              className="mx-auto"
            />
            <h1 className=" font-sans text-3xl font-semibold text-center mb-4">
              Warranty
            </h1>
            <p className="text-center">
              Our warranties and guarantees typically include coverage for{" "}
              <br />
              defects in materials for one year after purchase.
              <br /> We want you to feel confident in your purchase,
              <br /> which is why we stand behind our products with these <br />{" "}
              guarantees.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold  mb-32">
          Testimonials
        </h1>
        <div className="flex justify-center gap-8  flex-wrap">
          <div className="font-sans  relative  bg-customBlue rounded-3xl px-4 pb-6 mb-16 lg:mb-0">
            <img
              src="/images/testimonials/avatar1.svg"
              alt="avatar1"
              className=" absolute left-28 top-[-70px]"
            />
            <h1 className="font-semibold  text-center mt-20 mb-12 text-3xl">
              Natasha
            </h1>
            <p className="text-center">
              “I am blown away by the quality <br /> of the computer accessories
              I purchased <br /> from Smart Tech Stores.
              <br /> Not only did they improve my <br />
              productivity, but they were also stylish <br /> and comfortable to
              use. <br />I highly recommend Smart Tech Stores <br /> to anyone
              looking for top-notch tech products."
            </p>
          </div>
          <div className="font-sans  relative  bg-customBlue rounded-3xl px-4 pb-6  mb-16 lg:mb-0">
            <img
              src="/images/testimonials/avatar1.svg"
              alt="avatar1"
              className=" absolute left-28 top-[-70px]"
            />
            <h1 className="font-semibold  text-center mt-20 mb-12 text-3xl">
              Ivy
            </h1>
            <p className="text-center">
              "The customer service
              <br /> at Smart Tech Stores is unmatched.
              <br /> I had a question about one of their products <br /> and
              their team was quick <br /> to respond and very helpful. <br />{" "}
              It's refreshing to see a company that truly cares <br /> about
              their customers."
            </p>
          </div>
          <div className="font-sans mb-1 bg-customBlue relative rounded-3xl px-4 pb-6 w-[371px]">
            <img
              src="/images/testimonials/avatar2.svg"
              alt="avatar2"
              className=" absolute left-28 top-[-70px]"
            />
            <h1 className="font-semibold  text-center mt-20 mb-12 text-3xl">
              George
            </h1>
            <p className="text-center">
              "I was skeptical about buying computer <br /> accessories online, but
              Smart Tech Stores <br /> exceeded my expectations. Their website was<br /> easy
              to navigate, their prices were <br /> competitive, and my order arrived
              on time <br /> and in perfect condition. I will definitely be a <br /> repeat
              customer."
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
