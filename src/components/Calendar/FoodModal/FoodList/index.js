// External Dependencies
import React from 'react';

// Our Dependencies
import { trim } from '../../../../utils/helpers';

export default function FoodList({ foodList, onSelect}) {
  if (foodList.length === 0) {
    return (
      <p>Your search has 0 results </p>
    )
  }

  return (
    <ul className="food-list">
      { foodList.map((food, i) => (
        <li key={i}>
          <h3>{trim(food.label)}</h3>
          <img src={food.image} alt={food.label} />
          <div>{Math.floor(food.calories)} Calories</div>
          <div>{food.source}</div>
        </li>
      ))}
    </ul>
  )
}