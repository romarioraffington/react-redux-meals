// External Dependencies
import React from 'react';

// Our Dependencies
import { trim } from '../../../../utils/helpers';

export default function FoodList({ food, onSelect}) {
  if (food.length === 0) {
    return (
      <p>Your search has 0 results </p>
    )
  }

  return (
    <ul className="food-list">
      { food.map((item, i) => (
        <li key={i}>
          <h3>{trim(item.label)}</h3>
          <img src={item.image} alt={item.label} />
          <div>{Math.floor(item.calories)} Calories</div>
          <div>{item.source}</div>
        </li>
      ))}
    </ul>
  )
}