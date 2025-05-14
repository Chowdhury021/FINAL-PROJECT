import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <label>
          <input type="email" placeholder="Your email" />
        </label>
        <label>
          <input type="password" placeholder="Your password" />
        </label>
        <div className="login-links">
          <a href="#">Forgot your password?</a>
          <span>·</span>
          <a href="#">Don’t have an account? Create one</a>
        </div>
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}
