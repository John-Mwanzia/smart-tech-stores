import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
    const {Comp_Name} = useParams();
    const [product,setproduct] = usestate()
    useEffect(async()=>{
      const data =await axios.get(`http://localhost:3000/api/products/product/ ${Comp_Name}`)
    }, [Comp_Name])
  return (
    <div>
       <h1>{Comp_Name}</h1>

    </div>
  )
}
