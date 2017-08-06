// External Dependencies
import React, { Component } from 'react';

// Components
import Calendar from './Calendar';

export default class App extends Component {
  render() {
    const mealOrders = ['breakfast', 'lunch', 'dinner'];

    return (
      <div className="container">
        <div className="nav">
          <h1 className="header">UdaciMeals</h1>
        </div>
        <ul className="meal-types">
          { mealOrders.map(meal => (
            <li key={meal} className="subheader">
              {meal}
            </li>
          ))}
        </ul>
        <Calendar 
          mealOrders={mealOrders} 
        />
      </div>
    )
  }
}