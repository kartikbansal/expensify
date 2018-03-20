import React from 'react';
import { render } from 'react-dom';

import AppRouter from './routers/AppRouter.js';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

render(<AppRouter />, document.getElementById('app'));