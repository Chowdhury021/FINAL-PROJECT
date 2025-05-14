import React from "react";
import "./Sidebar.css";
// Adjust the path to assets and import the named `icons` export:
import { icons as assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Example menu items using icons */}
      <ul>
        <li>
          <img src={assets.basket_icon} alt="Orders" />
          <span>Orders</span>
        </li>
        <li>
          <img src={assets.parcel_icon} alt="Deliveries" />
          <span>Deliveries</span>
        </li>
        <li>
          <img src={assets.cross_icon} alt="Cancel" />
          <span>Cancel</span>
        </li>
        {/* Add more items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;