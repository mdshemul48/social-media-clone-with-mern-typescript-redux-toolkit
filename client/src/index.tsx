import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import state from './store/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';
ReactDOM.render(
  <Provider store={state}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
