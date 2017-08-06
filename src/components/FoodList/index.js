import React from 'react';

export default function FoodList({ food, onSelect}) {
  if (food.length === 0) {
    return (
      <p>Your search has 0 results </p>
    )
  }

  return (
    <ul className="food-list">
      { food.map(item => {
        <li>
          <h3>{item.label}</h3>
          <img src={item.image} alt={item.label} />
          <div>{Math.floor(item.calories)} Calories</div>
          <div>{item.source}</div>
        </li>
      })}
    </ul>
  )
}