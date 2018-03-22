import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
console.log(store.getState());

render(<AppRouter />, document.getElementById('app'));