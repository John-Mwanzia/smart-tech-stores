import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product(props) {
    const {product} = props;
  return (
    <div>
     <Card>
         <Link to={`/products/product/ ${product.Comp_Name}`}>
         <Card.Img  src={product.Img_Url} alt={product.Comp_Name} className='images'/>
        
         </Link>
       <Card.Body>
        <Card.Title> 
           <Link to={`/product/ ${product.Comp_Name}`}>{product.Comp_Name}
           </Link>
          </Card.Title>
         <Card.Text> Price: KSh.{product.price}</Card.Text>
         <Button variant='warning' className='mb-1'>Add to cart</Button>
        </Card.Body>

    </Card>
   
    </div>
  )
}
