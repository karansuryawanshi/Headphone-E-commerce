import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.scss";
// import { BrowserRouter as Router } from "react-router-dom";
// import AppContext from "./AppContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Success from "./components/success/success";
import Otp from "../src/components/signupOrLogin/signup";
// import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    // <Otp />
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/success" element={<Success />} />
          <Route path="/login" element={<Otp />} />
        </Routes>
        <Newsletter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
