import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout/AdminLayout.jsx";
import Login from "./components/Login/Login.jsx";
import Add   from "./pages/Add/Add.jsx";
// import other pages as needed…

export default function App() {
  return (
    <Routes>
      {/* public route */}
      <Route path="/login" element={<Login />} />

      {/* everything else goes into the admin layout */}
      <Route path="/" element={<AdminLayout />}>
        <Route index        element={<Add />} />
        <Route path="add"   element={<Add />} />
        {/* <Route path="list"  element={<List/>} /> */}
        {/* <Route path="orders"element={<Orders/>} /> */}
        <Route path="*"      element={<Navigate replace to="/" />} />
      </Route>
    </Routes>
  );
}
