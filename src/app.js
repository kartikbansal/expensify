import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 14500}));

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('app')
);