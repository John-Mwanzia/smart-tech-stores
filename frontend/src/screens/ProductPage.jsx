import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
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
    
    <img src={product. Img_Url} alt={product.Comp_Name} className="product-img" />

  
        
    </div>
  )
}
