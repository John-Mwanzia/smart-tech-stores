import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import data from '../../../backend/data';
export default function ProductPage() {
    const params = useParams();
    const {slug} = params;
  
    const [product,setproduct] = useState({})
    useEffect(()=>{
      const fetchData = async()=>{
      const result = await axios.get(`http://localhost:3000/api/product/${slug}`)

      setproduct(result.data)

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
