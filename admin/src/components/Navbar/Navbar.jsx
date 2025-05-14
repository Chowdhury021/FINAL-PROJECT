import React, { useContext } from "react";
import { useNavigate }     from "react-router-dom";
import { StoreContext }    from "../../context/StoreContext.jsx";
import { icons as assets } from "../../assets/assets.js";
import { toast }           from "react-toastify";

export default function Navbar() {
  const navigate = useNavigate();
  const ctx      = useContext(StoreContext) || {};
  const { token, admin, setToken, setAdmin } = ctx;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setToken("");
    setAdmin(false);
    toast.success("Logged out");
    navigate("/login");
  };

  return (
    <header className="navbar">
      <img className="logo"   src={assets.logo} alt="logo" />
      <h1 className="title">Tomato. Admin Panel</h1>

      {/* right-side controls */}
      <div className="nav-actions">
        {token && admin 
          ? <button onClick={logout}>Logout</button>
          : <button onClick={() => navigate("/login")}>Login</button>}
        {assets.profile_icon && (
          <img className="profile" src={assets.profile_icon} alt="Profile" />
        )}
      </div>
    </header>
  );
}
