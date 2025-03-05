import { useState } from "react";
import "./App.css";
import Navbar from "../components/Navbar/Navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Loginsignup from "../components/pages/loginsignup.jsx";
import Product from "../components/pages/product.jsx";
import Shop from "../components/pages/shop.jsx";
import Shopcategory from "../components/pages/shopcategory.jsx";
import Signup from "../components/signup/Signup.jsx";
import Login from "../components/login/Login.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Cart from "../components/cart/Cart.jsx";
import ProtectedRoute from "../components/protectedRoute.jsx";
import Wishlist from "../components/pages/wishlist.jsx";
import Profile from "../components/Profile/Profile.jsx";
// import passport from 'passport';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<Shop />} />
          <Route path="/login" element={<Login category="login" />} />
          <Route path="/men" element={<Shopcategory category="men" />} />
          <Route path="/women" element={<Shopcategory category="women" />} />
          <Route path="/kid" element={<Shopcategory category="kid" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:ID" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
