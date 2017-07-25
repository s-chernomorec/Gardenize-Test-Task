import {combineReducers} from 'redux';

import questions from './questionsReducer';
import filter from './filterReducer';

const rootReducer = combineReducers({
  questions,
  filter
});

export default rootReducer;
