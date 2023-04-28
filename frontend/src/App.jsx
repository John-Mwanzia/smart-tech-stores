import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Homepage from "./screens/Homepage";
import ProductPage from "./screens/ProductPage";
import FeaturedProductPage from "./screens/FeaturedProductPage";

function App(){
  return(
    <BrowserRouter>
<div>

<Routes>
<Route path="/" element={<Homepage />}/>
</Routes>


<main>


<Routes>
  
  <Route path="/products/slug/:slug" element={<ProductPage />} />
  <Route path="/featuredProducts/slug/:slug" element={<FeaturedProductPage />} />
  <Route path="/cart" element={<CartScreen/>}/>
</Routes>

</main>



</div>
    
    </BrowserRouter>
  )
  
}

export default App;