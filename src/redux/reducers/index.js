import { combineReducers } from 'redux';
import todoReducer from './todoReducer'; // We'll create this in the next step

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
