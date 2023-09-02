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
import Support from "./screens/Support";
import QA from "./screens/QA";
import StripeCheckoutScreen from "./screens/StripeCheckoutScreen";
import SuccessScreen from "./screens/Success_Screen";
import CancelPage from "./screens/CancelPage";
import AdminDashboard from "./screens/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        <main>
          <Routes>
            <Route path="/products/slug/:slug" element={<ProductPage />} />
            <Route
              path="/featuredProducts/slug/:slug"
              element={<FeaturedProductPage />}
            />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/mpesaCheckout" element={<MpesaCheckoutScreen />} />
            <Route path="/StripeCheckout" element={<StripeCheckoutScreen />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/QA" element={<QA />} />
            <Route path="/success" element={<SuccessScreen/>} />
            <Route path="/cancel" element={<CancelPage/>} />
          </Routes>
        </main>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
