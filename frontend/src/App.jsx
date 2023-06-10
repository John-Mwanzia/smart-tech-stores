import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import Homepage from "./screens/Homepage";
import ProductPage from "./screens/ProductPage";
import FeaturedProductPage from "./screens/FeaturedProductPage";
import SignInPage from "./screens/SignInPage";
import SearchPage from "./screens/SearchPage";
import SignUpPage from "./screens/SignUpPage";
import ShippingPage from "./screens/ShippingPage";
import MpesaCheckoutScreen from "./screens/mpesaCheckoutScreen";
import PaypalCheckoutScreen from "./screens/paypalCheckoutScreen";

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
  <Route path="/search" element={<SearchPage />}/>
  <Route path="/signin" element={<SignInPage />}/>
  <Route path="/signup" element={<SignUpPage />}/>
  <Route path="/shipping" element={<ShippingPage/>}/>
  <Route path="/mpesaCheckout" element={<MpesaCheckoutScreen/>}/>
  <Route path="/paypalCheckout" element={<PaypalCheckoutScreen/>}/>
</Routes>

</main>



</div>
    
    </BrowserRouter>
  )
  
}

export default App;