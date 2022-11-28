import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductPage() {
    const {Comp_Name} = useParams();
  return (
    <div>
       <h1>{Comp_Name}</h1>
    </div>
  )
}
