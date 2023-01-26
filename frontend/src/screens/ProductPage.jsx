import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import { Badge, Button, Col, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
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
             dispatch({type: 'FETCH-FAILURE', error: error})
          }
      
        //  setproducts(results.data)
      
      };
        fetchData();
      }, [slug])                 
  
    
  
   

  return (
    <div>
      <h1>{slug}</h1>
    <Row>
   <Col md={6}>
   <img src={product. Img_Url} alt={product.Comp_Name} className="product-img" />
   </Col> 
   <Col md={3}>
   
    <ListGroup>
    <h1>Description</h1>
      <ListGroup.Item>Brand: {product.Brand}</ListGroup.Item>
      <ListGroup.Item>{product.Specs}</ListGroup.Item>
    </ListGroup>
   </Col> 
   <Col md={3}>
    <ListGroup>
      <ListGroup.Item>
        Price: Ksh. {product.price}
      </ListGroup.Item>
      <ListGroup.Item>
        Status: {product.countInStock>0 ? <Badge bg='success'>Available</Badge> : <Badge bg='danger'>out of stock</Badge>}
      </ListGroup.Item>
      <div className='d-grid mt-3' >
        <Button variant='warning'>
           Add to cart
        </Button>
      </div>
    </ListGroup>
   </Col> 
   
    </Row>
    

  
        
    </div>
  )
}
