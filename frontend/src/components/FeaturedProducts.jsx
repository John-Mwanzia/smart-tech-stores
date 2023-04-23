import React, { useContext, useEffect, useReducer } from "react";
import Product from "./product";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
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

  const {state, dispatch:ctxdispatch} = useContext(Store);
      const {cart} = state;
      const {cartItems}= cart
   


  // const [state, Dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH-REQUEST" });
      try {
        const results = await axios.get(
          "http://localhost:3000/api/featuredProducts"
        );
        dispatch({ type: "FETCH-SUCCESS", payload: results.data });
      } catch (error) {
        dispatch({ type: "FETCH-FAILURE", error: error });
      }

      //  setproducts(results.data)
    };
    fetchData();
  }, []);

  const updateCart = async(item)=>{
    
    const existItem = cartItems.find(item =>{
      item._id
     })
     const quantity = existItem? existItem.quantity+1 : 1;
     const {data} = await axios.get(`http://localhost:3000/api/featuredProducts/${item._id}`)
      if(data.countInStock < quantity){
        window.alert(" Sorry, the product is out of stock");
        return;
      } else
      ctxdispatch({type:"ADD-TO-CART", payload: {...item, quantity} })
      // navigate("/cart")

}

  return (
    <div>
      <h1>Featured products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col
              sm={6}
              md={4}
              lg={3}
              key={product.Gadget_Name}
              className="d-flex mt-3 justify-content-center "
            >
              <Card>
                <Link to={`/featuredProduct/${product.slug}`}>
                  <Card.Img
                    src={product.Img_Url}
                    alt={product.Gadget_Name}
                    className="images"
                  />
                </Link>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/featuredProduct/${product.slug}`}>
                      {product.Gadget_Name}
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
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
