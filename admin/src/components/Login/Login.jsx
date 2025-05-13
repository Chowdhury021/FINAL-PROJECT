import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Login = ({ url }) => {
  const navigate = useNavigate();
  const { admin, setAdmin, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({ email: "", password: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post(url + "/api/user/login", data);
    if (response.data.success && response.data.role === "admin") {
      setToken(response.data.token);
      setAdmin(true);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("admin", true);
      toast.success("Login Successfully");
      navigate("/add");
    } else {
      toast.error(
        response.data.success
          ? "You are not an admin"
          : response.data.message
      );
    }
  };

  useEffect(() => {
    if (admin && token) {
      navigate("/add");
    }
  }, [admin, token, navigate]);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Login</h2>
        </div>

        <div className="login-popup-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />

          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
          />

          {/* Forgot password link */}
          <p className="login-popup-link">
            <a href="/forgot-password">Forgot your password?</a>
          </p>

          {/* Create account link */}
          <p className="login-popup-link">
            Don’t have an account?{" "}
            <a href="/register">Create one</a>
          </p>
        </div>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;