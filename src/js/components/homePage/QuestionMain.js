import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

const QuestionMain = ({answersCount, link, title, username, text}) => {
  const _text = text.length > 100 ? text.slice(100) + ' ...' : text;
  const answersCountStyle = answersCount === 0 ? {color: '#C74444'} : {}
  return (
    <div className="question-main">
      <div className="question-main-answers-count"><span style={answersCountStyle}>{answersCount}</span> Answers</div>
      <div className="question-main-content">
        <div className="question-main-header">
          <NavLink to={`/questions/${link}`} className="question-main-header-link">
            <h2 className="question-main-header-title">{title}</h2>
          </NavLink>
          <span className="question-main-author">by {username}</span>
        </div>
        <div className="question-main-text">{_text}</div>
      </div>
    </div>
  );
};

QuestionMain.propTypes = {
  answersCount: PropTypes.number.isRequired,
  link: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default QuestionMain;
