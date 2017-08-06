// External Dependencies
import React, { Component } from 'react'
import { connect } from 'react-redux';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';

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
  render() {
    console.log(this.props)
    const { mealOrders, calendar } = this.props;

    return (
      <div className="calendar">
        <div className="days">
          { calendar.map(({ day }) => 
            <h3 key={day} className="subheader">
              {day}
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
                          <img 
                            src={meals[meal].image} 
                            alt={meals[meal].label}
                            />
                        </div>
                      : <button className="icon-btn">
                          <CalendarIcon size={30} /> 
                        </button>        
                  }
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Calendar)