// External Dependencies
import { combineReducers } from 'redux';

// Our Reducers
import calendar from './components/Calendar/reducer';
import food from './components/FoodList/reducer';

export default combineReducers({
  calendar,
  food,
})