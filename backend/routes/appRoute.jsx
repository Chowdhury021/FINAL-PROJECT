import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home"; // Assuming you have a Home component

function App() {
  return (
    <Router>
      <div>
        {/* Your navigation/header if any */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


