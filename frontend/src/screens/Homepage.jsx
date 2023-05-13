import React, { useEffect, useReducer, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/product";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import Header from "../components/header";
import Footer from "../components/Footer";
import FeaturedProducts from "../components/FeaturedProducts";
import Slider from "../components/Slider";

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
      <div className="landing ">
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

      <Container>
        <h1>Laptops</h1>
        <Row>
          {products.map((product) => {
            return (
              <Col
                sm={6}
                md={4}
                lg={3}
                key={product.Comp_Name}
                className="d-flex mt-3 justify-content-center "
              >
                <Product product={product} />
              </Col>
            );
          })}
        </Row>

        <Row className="mt-3 ">
          <FeaturedProducts />
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
