import * as types from './actionTypes';

const filterQuestions = filter => ({
  type: types.FILTER_QUESTIONS,
  payload: filter
});

export {filterQuestions};
