import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import data from "./components/data";
import Header from "./components/header"

function App(){
  return(
    <BrowserRouter>
<div>
<Header />


<main>
<Container>
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
         <Card.Text> Price: {product.price}</Card.Text>
         <Button variant="warning">Add to cart</Button>
    </Card.Body>

    </Card>
  </Col>
)})}
</Row>
</Container>
</main>



</div>
    
    </BrowserRouter>
  )
  
}

export default App;