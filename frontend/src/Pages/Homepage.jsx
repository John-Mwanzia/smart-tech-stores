import React from 'react'
import data from "../components/data";
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

export default function Homepage() {
  return (
    <div>
   
<h1>Laptops</h1>
<Row >
{data.products.map(product=>{
  return(
   <Col sm={6} md={4} lg={3}  key={product.Comp_Name}   className='d-flex mt-3 justify-content-center '>

   <Card>
         <Link to={`/product/ ${product.Comp_Name}`}>
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
