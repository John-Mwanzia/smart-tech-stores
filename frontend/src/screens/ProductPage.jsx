import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Badge, Button, Col, ListGroup, Row } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { Store } from '../store';
// import data from '../../../backend/data';

const reducer = (state, action)=>{
  switch(action.type){
    case 'FETCH-REQUEST':
      return {...state, loading: true}
    case 'FETCH-SUCCESS':
      return {...state, loading: false, product: action.payload}
    case 'FETCH-FAILURE':
      return {...state, loading: false, error: action.payload}  
    default:
    return state    
  }
}

export default function ProductPage() {
    const params = useParams();
    const {slug} = params;
    const navigate = useNavigate()

    const [{product,loading,error}, dispatch] = useReducer(reducer, {
      product: [],
      loading: true,
      error: ''
    })
    
    // const [state, Dispatch] = useReducer(reducer, initialState)
      useEffect(()=>{
        const fetchData = async()=>{
          dispatch({type: 'FETCH-REQUEST'})
          try {
            const results = await axios.get(`http://localhost:3000/api/product/${slug}`)
            dispatch({type: 'FETCH-SUCCESS', payload: results.data})
           
          } catch (error) {
             dispatch({type: 'FETCH-FAILURE', payload: error.message})
          }
      
        //  setproducts(results.data)
      
      };
        fetchData();
      }, [slug])      
      
      //rename dispatch to context dispatch
      const {state, dispatch:ctxdispatch} = useContext(Store);
      const {cart} = state;
  
    const addToCart = async()=>{
    
        const existItem = cart.cartItems.find(item =>{
          item._id
         })
         const quantity = existItem? existItem.quantity+1 : 1;
         const {data} = await axios.get(`http://localhost:3000/api/products/${product._id}`)
          if(data.countInStock < quantity){
            window.alert(" Sorry, the product is out of stock");
            return;
          } else
          ctxdispatch({type:"ADD-TO-CART", payload: {...product, quantity} })
          navigate("/cart")

    }
  
   

  return (
    <div>
      {/* <h1>{slug}</h1> */}
    <Row className='mt-3'>
   <Col md={5}>
   <img src={product. Img_Url} alt={product.Comp_Name} className="product-img" />
   </Col> 
   <Col md={5}>
   
    <ListGroup variant='flush'>
    <h1>Description</h1>
      <ListGroup.Item>Brand: {product.Brand}</ListGroup.Item>
      <ListGroup.Item>{product.Comp_Name}</ListGroup.Item>
      <ListGroup.Item> <strong>Specs:</strong> {product.Specs}</ListGroup.Item>
    </ListGroup>
   </Col> 
   <Col md={2}>
    <ListGroup >
      <ListGroup.Item>
        Price: Ksh. {product.price}
      </ListGroup.Item>
      <ListGroup.Item className='mb-1'>
        Status: {product.countInStock>0 ? <Badge bg='success'>Available</Badge> : <Badge bg='danger'>out of stock</Badge>}
      </ListGroup.Item>
      <div className='d-grid ' >
        <Button variant='warning'onClick={addToCart} >
           Add to cart
        </Button>
      </div>
    </ListGroup>
   </Col> 
   
    </Row>
    

  
        
    </div>
  )
}
