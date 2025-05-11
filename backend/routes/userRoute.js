import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";

function AppRoute() {
  const routeList = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/delivery", element: <Delivery /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/category/:categoryName", element: <CategoryPage /> },
  ];

  return (
    <Router>
      <div>
        <Routes>
          {routeList.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRoute;
