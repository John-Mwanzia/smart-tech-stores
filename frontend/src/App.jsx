import React from "react";
import { BrowserRouter } from "react-router-dom";
import data from "./components/data";
import Header from "./components/header"

function App(){
  return(
    <BrowserRouter>
<div>
<Header />


<main>
<h1>Laptops</h1>
<div className="products">
{data.products.map(product=>{
  return <div className="product" key={product.Comp_Name}>
    <img src={product.Img_Url} alt={product.Comp_Name}/>
    <div className="product-details">
    <p>
    
       {product.Comp_Name}
    </p>
    <p>
      Price: {product.price}
    </p>
    <button>Add to cart</button>
    </div>
  </div>
})}
</div>
</main>



</div>
    
    </BrowserRouter>
  )
  
}

export default App;