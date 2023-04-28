import axios from 'axios';
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Badge, Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/header';
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

export default function FeaturedProductPage() {
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
            const results = await axios.get(`http://localhost:3000/api/featuredProducts/slug/${slug}`)
            console.log(results);
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
         const {data} = await axios.get(`http://localhost:3000/api/featuredProducts/${product._id}`)
          if(data.countInStock < quantity){
            window.alert(" Sorry, the product is out of stock");
            return;
          } else
          ctxdispatch({type:"ADD-TO-CART", payload: {...product, quantity} })
          navigate("/cart")

    }
  
   

  return (
    <div>
     
     <Helmet>
       <title>
        {slug}
       </title>
     </Helmet>
<Header />
      <h1 className='px-4 mt-4'>{product.Gadget_Name}</h1>
<Container>
    <Row className='mt-4'>
   <Col md={5}>
   <img src={product. Img_Url} alt={product.Gadget_Name} className="product-img" />
   </Col> 
   <Col md={5}>
   
    <ListGroup variant='flush'>
    <h1>Description</h1>
      <ListGroup.Item>{product.Gadget_Name}</ListGroup.Item>
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
    
</Container>
  
        
    </div>
  )
}
