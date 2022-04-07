import { combineReducers } from 'redux';
import actsReducer from './Acts/actsReducer.js';

const rootReducer = combineReducers({
  acts: actsReducer,
});

export default rootReducer;
