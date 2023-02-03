import React, { useEffect, useReducer, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import Product from '../components/product';
import axios from "axios"
import { Helmet } from 'react-helmet-async';

const reducer = (state, action)=>{
  switch(action.type){
    case 'FETCH-REQUEST':
      return {...state, loading: true}
    case 'FETCH-SUCCESS':
      return {...state, loading: false, products: action.payload}
    case 'FETCH-FAILURE':
      return {...state, loading: false, error: action.payload}  
    default:
    return state    
  }
}

export default function Homepage() {
  // const [products, setproducts] = useState([])

  const [{products,loading,error}, dispatch] = useReducer(reducer, {
    products: [],
    loading: true,
    error: ''
  })
  
  // const [state, Dispatch] = useReducer(reducer, initialState)
    useEffect(()=>{
      const fetchData = async()=>{
        dispatch({type: 'FETCH-REQUEST'})
        try {
          const results = await axios.get('http://localhost:3000/api/products')
          dispatch({type: 'FETCH-SUCCESS', payload: results.data})
        } catch (error) {
           dispatch({type: 'FETCH-FAILURE', error: error})
        }
    
      //  setproducts(results.data)
    
    };
      fetchData();
    }, [])
 
  return (
    <div>

    <Helmet>
      <title>Smart Tech Stores</title>
    </Helmet>

    <div className='landing-page'>
   
    <div className='intro'> <h2 data-text="Welcome to smart tech stores... The World of Tech">Welcome to smart tech stores... The World of Tech</h2></div>
    <div className='hero-title'>
    <h1>Get the best deals on computer accessories and other electronics</h1>
    </div>
  
    
    </div>

   <div className='text-center'>
   <h1>Upgrade your Tech with our wide selection of products</h1>
   </div>
    
      <h1>Laptops</h1>
<Row >
{products.map(product=>{
  return(
   <Col sm={6} md={4} lg={3}  key={product.Comp_Name}   className='d-flex mt-3 justify-content-center '>

    <Product product={product}/>
  </Col>
)})}
</Row>

 <Row className='mt-3 ' >
    <Col className='  d-flex justify-content-center  '>
       <Link style={{textDecoration: 'none'}}  to="/allitems"> 
       <div className=' more-items'>
         More items {' '}
         <KeyboardArrowDownIcon />
      </div>
       </Link>
       </Col>  
 </Row>
    </div>
  )
}
