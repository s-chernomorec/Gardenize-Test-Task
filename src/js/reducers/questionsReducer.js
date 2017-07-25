import {assign} from '../helpers';
import * as types from '../actions/actionTypes';

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_QUESTION:
      return [...state, assign(action.payload)];

    case types.ADD_ANSWER:
      return state.map(question => {
        return (question.id !== action.payload.questionID
          ? question
          : assign(question, { answers: [...question.answers, action.payload] }))
      });

    default:
      return state;
  }
};

export default questionsReducer;
