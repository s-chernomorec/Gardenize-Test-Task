import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import PopupFrame from './PopupFrame';
import PopupButtonsRow from './PopupButtonsRow';
import {InputWithLabel} from '../common/Inputs';
import {simpleValidation} from '../../helpers';

import {addQuestion} from '../../actions/questionsActions';

class AskQuestionPopup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      title: '',
      text: '',
      validationResults: []
    }

    this.submitQuestion = this.submitQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.returnInitialState = this.returnInitialState.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  submitQuestion() {
    const question = {
      username: this.state.username,
      title: this.state.title,
      text: this.state.text
    }

    const validationResults = simpleValidation(this.state);

    if (validationResults.length !== 0) {
      this.setState({validationResults: validationResults})
    } else {
      this.props.dispatch(addQuestion(question));
      this.closePopup();
    }
  }

  handleChange(e, inputName) {
    const value = e.target.value;
    switch (inputName) {
      case 'username': this.setState({ username: value }); break;
      case 'title': this.setState({ title: value }); break;
      case 'text': this.setState({ text: value }); break;
    }
  }

  returnInitialState() {
    this.setState({
      username: '',
      title: '',
      text: ''
    });
  }

  closePopup() {
    this.returnInitialState();
    this.props.closePopup();
  }

  render() {
    return this.props.popupIsActive === true
      ? <PopupFrame title="Ask Question" closePopup={this.closePopup}>

          <div className="popup-validation-result">{this.state.validationResults.map((item, i) => <div key={i}>{item}</div>)}</div>

          <InputWithLabel
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChange(e, 'username')}
          />

          <InputWithLabel
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e, 'title')}
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

AskQuestionPopup.propTypes = {
  popupIsActive: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default connect()(AskQuestionPopup);
