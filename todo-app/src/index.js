// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom';

// Wrap the App component with the Provider component
const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
