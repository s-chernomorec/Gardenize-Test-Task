import * as types from '../actions/actionTypes';
import {questionsFilters} from '../constants';

const filterReducer = (state = questionsFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case types.FILTER_QUESTIONS:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
