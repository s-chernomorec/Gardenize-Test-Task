import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../common/Header';
import QuestionBlock from './QuestionBlock';
import AnswersBlock from './AnswersBlock';
import AnswerQuestionPopup from '../popups/AnswerQuestionPopup';
import AskQuestionPopup from '../popups/AskQuestionPopup';


const mapStateToProps = (state, ownProps) => {
  return {question: state.questions.filter(question => question.id === +ownProps.match.params.questionID)[0]}
};

class QuestionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      askQuestionPopupIsActive: false,
      answerQuestionPopupIsActive: false
    }

    this.openAskQuestionPopup = this.openAskQuestionPopup.bind(this);
    this.closeAskQuestionPopup = this.closeAskQuestionPopup.bind(this);
    this.openAnswerQuestionPopup = this.openAnswerQuestionPopup.bind(this);
    this.closeAnswerQuestionPopup = this.closeAnswerQuestionPopup.bind(this);
  }

  openAskQuestionPopup() {
    this.setState({askQuestionPopupIsActive: true});
  }

  closeAskQuestionPopup() {
    this.setState({askQuestionPopupIsActive: false});
  }

  openAnswerQuestionPopup() {
    this.setState({answerQuestionPopupIsActive: true});
  }

  closeAnswerQuestionPopup() {
    this.setState({answerQuestionPopupIsActive: false});
  }

  render() {
    const question = this.props.question;

    return (
      <div className="wrapper">
        <Header openAskQuestionPopup={this.openAskQuestionPopup} />
        <QuestionBlock
          title={question.title}
          text={question.text}
          author={question.username}
        />
        <AnswersBlock
          answers={question.answers}
          openAnswerQuestionPopup={this.openAnswerQuestionPopup}
        />
        <AskQuestionPopup
          popupIsActive={this.state.askQuestionPopupIsActive}
          closePopup={this.closeAskQuestionPopup} />
        <AnswerQuestionPopup
          questionID={question.id}
          answerID={question.answers.length}
          popupIsActive={this.state.answerQuestionPopupIsActive}
          closePopup={this.closeAnswerQuestionPopup} />
      </div>
    );
  }
}

QuestionPage.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    date: PropTypes.instanceOf(Date).isRequired
  }).isRequired
};

export default connect(mapStateToProps)(QuestionPage);
