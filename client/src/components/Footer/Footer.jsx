import React from "react";
import "./Footer.css";
import { assets } from '../../assets/frontend_assets/assets.js';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato Logo" />
          <p>Fast. Fresh. Delivered.</p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/delivery">Delivery</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2025 @ Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;

