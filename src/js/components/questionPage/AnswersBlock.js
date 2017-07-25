import React from 'react';
import PropTypes from 'prop-types';

import {MenuButton} from "../common/Buttons";
import Answer from "./Answer";

const AnswersBlock = ({answers, openAnswerQuestionPopup}) => {
  const answersCount = answers.length;

  return (
    <div className="answers-block">
      <div className="answers-header">
        <h2 className="answers-title">{answersCount} Answers</h2>
        <MenuButton value="Answer Question" onClick={openAnswerQuestionPopup} />
      </div>
      <div className="answers-content">
        {
          answersCount === 0
            ? <div className="answers-no-answers">No answers yet, you can be first!</div>
            : answers.sort((a, b) => b.date - a.date).map((answer, i) => <Answer key={i} text={answer.text} author={answer.username} />)
        }
      </div>
    </div>
  );
};

AnswersBlock.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape({
    questionID: PropTypes.number.isRequired,
    answerID: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
  openAnswerQuestionPopup: PropTypes.func.isRequired
}

export default AnswersBlock;
