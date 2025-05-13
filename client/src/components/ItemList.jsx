import React from "react";
import DishCard from "./DishCard";

export default function ItemList({ items, onAdd }) {
  if (items.length === 0) {
    return <div className="no-items">No items found in this category.</div>;
  }

  return (
    <div className="food-display-list">
      {items.map((item) => (
        <DishCard key={item._id} dish={item} onAdd={onAdd} />
      ))}
    </div>
  );
}