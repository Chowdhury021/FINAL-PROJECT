import React from 'react';

export default function DishCard({ dish, onAdd }) {
  return (
    <div className="dish-card border rounded p-4 flex flex-col items-center">
      <img src={dish.image} alt={dish.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="font-semibold">{dish.name}</h3>
      <p className="text-gray-600 mb-2">${dish.price.toFixed(2)}</p>
      <button
        onClick={() => onAdd(dish)}
        className="px-3 py-1 bg-green-500 text-white rounded"
      >
        Add to cart
      </button>
    </div>
  );
}
