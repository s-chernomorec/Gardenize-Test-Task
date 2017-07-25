import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PopupFrame from './PopupFrame';
import PopupButtonsRow from './PopupButtonsRow';
import {InputWithLabel} from '../common/Inputs';
import {simpleValidation} from '../../helpers';

import {addAnswer} from '../../actions/questionsActions';

class AnswerQuestionPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      text: '',
      validationResults: []
    }

    this.submitQuestion = this.submitQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.returnInitialState = this.returnInitialState.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  submitQuestion() {
    const answer = {
      questionID: this.props.questionID,
      answerID: this.props.answerID,
      id: this.state.questionID,
      username: this.state.username,
      text: this.state.text
    }

    const validationResults = simpleValidation(this.state);

    if (validationResults.length !== 0) {
      this.setState({validationResults: validationResults})
    } else {
      this.props.dispatch(addAnswer(answer));
      this.closePopup();
    }
  }

  handleChange(e, inputName) {
    const value = e.target.value;
    switch (inputName) {
      case 'username': this.setState({ username: value }); break;
      case 'text': this.setState({ text: value }); break;
    }
  }

  returnInitialState() {
    this.setState({
      username: '',
      text: ''
    });
  }

  closePopup() {
    this.returnInitialState();
    this.props.closePopup();
  }

  render() {
    return this.props.popupIsActive === true
      ? <PopupFrame title="Answer Question" closePopup={this.closePopup}>

          <div className="popup-validation-result">{this.state.validationResults.map((item, i) => <div key={i}>{item}</div>)}</div>

          <InputWithLabel
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e, 'username')}
          />

          <textarea
            name="text"
            value={this.state.text}
            onChange={(e) => this.handleChange(e, 'text')}
          />

          <PopupButtonsRow cancelClick={this.closePopup} confirmClick={this.submitQuestion} />

        </PopupFrame>
      : null;
  }
}

AnswerQuestionPopup.propTypes = {
  questionID: PropTypes.number.isRequired,
  answerID: PropTypes.number.isRequired,
  popupIsActive: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired
}

export default connect()(AnswerQuestionPopup);
