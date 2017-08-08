// External Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';

// Our Dependencies
import { fetchRecipes } from '../../utils/api';
import { capitalize } from '../../utils/helpers';

// Our Components
import FoodModal from './FoodModal';

// Redux
function mapStateToProps({ calendar }, { mealOrders }) {
  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  return {
    mealOrders,

    // Convert the calendar state object
    // to an array to be used in the component
    calendar: days.map(day => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] || null;
        return meals;
      }, {})
    }))
  }
}

// Component
class Calendar extends Component {

  state = {
    meal: null,
    day: null,
    food: null,
    isLoadingFood: false,
    isFoodModalOpen: false,
    ingredientsModalOpen: false,
  }

  openFoodModal = ({ meal, day }) => {
    this.setState(() => ({
      isFoodModalOpen: true,
      meal,
      day,
    }))
  }

  closeFoodModal = () => {
    this.setState(() => ({
      isFoodModalOpen: false,
      meal: null,
      day: null,
      food: null,
    }))
  }

  searchFood = (value) => {
    if (!value) return;
    this.setState({ isLoadingFood: true });

    fetchRecipes(value).then(food => {
      this.setState({ food, isLoadingFood: false });
    })
  }

  render() {
    const { isLoadingFood, isFoodModalOpen, meal, day, food } = this.state;
    const { mealOrders, calendar } = this.props;

    return (
      <div>
        <div className="calendar">
          <div className="days">
            { calendar.map(({ day }) => 
              <h3 key={day} className="subheader">
                {capitalize(day)}
              </h3>
            )}
          </div>
          <div className="icon-grid">
            { calendar.map(({ day, meals }) => (
              <ul key={day}>
                { mealOrders.map(meal => (
                  <li key={meal} className="meal">
                    { meals[meal] 
                        ? <div className="food-item">
                            <img src={meals[meal].image} alt={meals[meal].label}/>
                          </div>
                        : <button className="icon-btn" onClick={() => this.openFoodModal({ meal, day })}>
                            <CalendarIcon size={30} /> 
                          </button>        
                    }
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        
        <FoodModal 
          meal={meal} 
          day={day}
          food={food}
          isLoadingFood={isLoadingFood}
          isFoodModalOpen={isFoodModalOpen}
          searchFood={this.searchFood}
          closeFoodModal={this.closeFoodModal}
        />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Calendar)