// src/store.js

import { createStore } from 'redux';
import TaskReducer from './Reducers/taskReducer';

const store = createStore(TaskReducer);

export default store;
