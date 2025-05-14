// admin/src/pages/Add/Add.jsx

import React, { useState } from "react";
import "./Add.css";
import { icons as assets } from "../../assets/assets";

const Add = () => {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adding", { itemName, price });
    setItemName("");
    setPrice("");
  };

  return (
    <div className="add">
      <h2 className="add-title">Add New Item</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="add-field">
          <label htmlFor="itemName">Item Name</label>
          <input
            id="itemName"
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="add-field">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            min="0"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-btn">
          <img src={assets.add_icon_white} alt="Add" className="add-btn-icon" />
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Add;
