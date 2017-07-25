import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({text, author}) => {
  return (
    <div className="answer-wrapper">
      <div className="answer-text">{text}</div>
      <div className="answer-author">by {author}</div>
    </div>
  );
};

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Answer;
