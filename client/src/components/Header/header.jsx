import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Delicious Food Just a Click Away</h2>
        <p>
        Browse a variety of crave-worthy meals made with top-quality ingredients and delivered straight to your door. We make it easy to enjoy restaurant-quality food anytime, anywhere.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
