import React, { useContext } from "react";
import "./FoodDisplay.css";
import ItemList from "../ItemList";           // <-- ItemList.jsx lives in components/
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list, addToCart } = useContext(StoreContext);

  // Filter by category (or show all)
  const items =
    category === "All"
      ? food_list
      : food_list.filter((dish) => dish.category === category);

  return (
    <div className="food-display" id="food-display">
      <h2>Best Dishes Near You</h2>
      <ItemList items={items} onAdd={addToCart} />
    </div>
  );
};

export default FoodDisplay;