import React, { useContext } from "react";
import "@/components/FoodDisplay/FoodDisplay.css";
import ItemList from "@/components/ItemList";
import { StoreContext } from "@/context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list, addToCart } = useContext(StoreContext);

  // Filter by category (or show all)
  const items =
    category === "All"
      ? food_list
      : food_list.filter((dish) => dish.category === category);

  // If no dishes match this category, show a friendly message
  if (!items.length) {
    return (
      <div className="food-display" id="food-display">
        <h2>Best Dishes Near You</h2>
        <p className="no-items">No dishes found in “{category}”.</p>
      </div>
    );
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Best Dishes Near You</h2>
      <ItemList items={items} onAdd={addToCart} />
    </div>
  );
};

export default FoodDisplay;
