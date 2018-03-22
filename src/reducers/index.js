import { combineReducers } from 'redux';
import expensesReducer from './expenses.js';
import filtersReducer from './filters.js';

const rootReducer =  combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

export default rootReducer;
