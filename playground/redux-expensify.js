import { createStore, combineReducers } from 'redux';



//ADD_EXPENSE
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
}

//REMOVE_EXPENSE
const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
}

//EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
}

//SET_TEXT_FILTER
const setTextFiter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  };
}

//SORT_BY_DATE
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
}

//SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
}

//SET_START_DATE
const setStartDate = (startDate) => {
  return {
    type: 'SET_START_DATE',
    startDate
  };
}

//SET_END_DATE
const setEndDate = (endDate) => {
  return {
    type: 'SET_END_DATE',
    endDate
  };
}


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE': 
      return state.filter(expense => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if(expense.id === action.id) {
          return {
            expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };  
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        startDate: action.endDate
      }; 
    default:
      return state;
  }
}

const demoState = {
  expenses: [{
    id: 'qwvsfter',
    description: 'January Rent',
    note: 'This was the final payment for thatv address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expenses.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date')
      return a.createdAt < b.createdAt ? 1 : -1;
    
    if(sortBy === 'amount')
      return a.amount < b.amount ? 1 : -1;
  })
}

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
});

const store = createStore(rootReducer);
console.log(store.getState());