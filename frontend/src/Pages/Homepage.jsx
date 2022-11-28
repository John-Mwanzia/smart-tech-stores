import React from 'react'
import data from "../components/data";
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      
<h1>Laptops</h1>
<Row>
{data.products.map(product=>{
  return(
   <Col sm={6} md={4} lg={3}  key={product.Comp_Name}  >

   <Card>
         <Link to={`/product/ ${product.Comp_Name}`}>
             <img src={product.Img_Url} alt={product.Comp_Name} className="card-img-top"/>
         </Link>
    <Card.Body>
        <Card.Title> 
           <Link to={`/product/ ${product.Comp_Name}`}>{product.Comp_Name}
           </Link>
          </Card.Title>
         <Card.Text> Price: KSh.{product.price}</Card.Text>
         <Button variant="warning">Add to cart</Button>
    </Card.Body>

    </Card>
  </Col>
)})}
</Row>

 <Row className='mt-3  ' >
    <Col className='  d-flex justify-content-center  '>
       <Link style={{textDecoration: 'none'}}  to="/allItems"> 
       <Card    className='pd-1 rounded-pill more-items'>
       
       <Card.Body>
          More items {' '}
         <Card.Img variant='right' src='https://static.vecteezy.com/system/resources/previews/006/827/566/original/down-arrow-icon-sign-symbol-logo-vector.jpg'/>
         </Card.Body> 
      
      </Card>
       </Link>
       </Col>  
 </Row>
    </div>
  )
}
