import React from 'react';
import PropTypes from 'prop-types';

const QuestionBlock = ({title, text, author}) => {
  return (
    <div className="question-block">
      <div className="question-header">
        <h2>{title}</h2>
      </div>
      <div className="question-content">{text}</div>
      <div className="question-footer">
        <div className="question-author">by {author}</div>
      </div>
    </div>
  );
};

QuestionBlock.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default QuestionBlock;
