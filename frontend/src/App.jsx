import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header"
import Homepage from "./screens/Homepage";
import ProductPage from "./screens/ProductPage";

function App(){
  return(
    <BrowserRouter>
<div>
<Header />


<main>
<Container>

<Routes>
  <Route path="/" element={<Homepage />}/>
  <Route path="/product/:slug" element={<ProductPage />} />
</Routes>

</Container>
</main>



</div>
    
    </BrowserRouter>
  )
  
}

export default App;