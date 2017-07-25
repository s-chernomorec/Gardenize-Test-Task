import {assign} from '../helpers';
import * as types from './actionTypes';

import initialData from '../initialData';

let questionID = Math.max.apply(null, initialData.questions.map(question => question.id)) + 1;

const addQuestion = question => ({
  type: types.ADD_QUESTION,
  payload: assign(
    question,
    {
      id: questionID++,
      date: new Date,
      answers: []
    }
  )
});

const addAnswer = answer => ({
  type: types.ADD_ANSWER,
  payload: assign( answer, { date: new Date })
});


export {addQuestion, addAnswer};
