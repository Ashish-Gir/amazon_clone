import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductsList from "./components/Products";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import SearchProductsByCategory from "./components/SearchProductsByCategory";
import Search from "./components/Search";
import Login from "./components/Login";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/category/:id" element={<SearchProductsByCategory />} />
          <Route path="/search/:id" element={<Search/>} />
          <Route path="/search/" element={<ProductsList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/account" element={<Dashboard/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<Error/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
