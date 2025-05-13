import React, { useContext } from "react";
import "./FoodDisplay.css";
import DishCard from "../DishCard/DishCard";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list, addToCart } = useContext(StoreContext);

  // Filter by category (or show all)
  const items =
    category === "All"
      ? food_list
      : food_list.filter((dish) => dish.category === category);

  // If no dishes match, show a friendly message
  if (!items.length) {
    return <p className="no-items">No dishes found in “{category}”.</p>;
  }

  return (
    <div className="food-display" id="food-display">
      <h2>Best Dishes Near You</h2>
      <div className="food-display-list">
        {items.map((dish) => (
          <DishCard key={dish._id} dish={dish} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
