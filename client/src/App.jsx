import React, { useState } from "react";
//import Navbar from "./components/Navbar/Navbar";
import Navbar from "./components/navbar/navbar.jsx";
import { Route, Routes } from "react-router-dom";
//import Home from "./pages/Home/Home";
import Home from "./pages/home/home.jsx";
//import Cart from "./pages/Cart/Cart";
import Cart from "./pages/cart/cart.jsx";
//import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import PlaceOrder from "./pages/placeOrder/placeOrder.jsx";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import Verify from "./pages/Verify/Verify";
import Verify from "./pages/Verify/Verify.jsx"; // case matches folder & file
//import MyOrders from "./pages/MyOrders/MyOrders";
import MyOrders from "./pages/MyOrders/MyOrders.jsx"; // case matches folder & file
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import AboutUs from "./components/pages/About";
import Delivery from "./components/pages/Delivery.jsx";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/delivery" element={<Delivery />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
