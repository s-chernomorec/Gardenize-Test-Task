import React from 'react';
import PropTypes from 'prop-types';

import QuestionMain from './QuestionMain';

const QuestionsMainList = ({questions}) => {
  return (
    <div className="questions-main-list">
      {
        questions.sort((a, b) => b.date - a.date).map((question, i) => (
          <QuestionMain
            key={i}
            answersCount={question.answers.length}
            link={question.id}
            title={question.title}
            username={question.username}
            text={question.text}
          />))
      }
    </div>
  );
}

QuestionsMainList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      answers: PropTypes.array.isRequired,
      date: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired
}

export default QuestionsMainList;
