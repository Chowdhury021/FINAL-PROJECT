import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./AdminLayout.css";

export default function AdminLayout() {
  return (
    <>
      <Navbar />
      <div className="admin-layout">
        <Sidebar />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
