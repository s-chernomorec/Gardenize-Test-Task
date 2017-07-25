import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {questionsFilters} from '../../constants';
import {filterQuestions} from '../../actions/filterActions';
import Header from '../common/Header';
import FilterMenu from './FilterMenu';
import QuestionsMainList from './QuestionsMainList';
import AskQuestionPopup from '../popups/AskQuestionPopup';


const mapStateToProps = (state) => ({
  questions: state.questions,
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(filterQuestions(filter))
});

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      askQuestionPopupIsActive: false
    }

    this.openAskQuestionPopup = this.openAskQuestionPopup.bind(this);
    this.closeAskQuestionPopup = this.closeAskQuestionPopup.bind(this);
    this.filterQuestions = this.filterQuestions.bind(this);
  }

  openAskQuestionPopup() {
    this.setState({askQuestionPopupIsActive: true});
  }

  closeAskQuestionPopup() {
    this.setState({askQuestionPopupIsActive: false});
  }

  filterQuestions(filter) {
    switch (filter) {
      case questionsFilters.SHOW_ALL:
        return this.props.questions;
      case questionsFilters.SHOW_UNANSWERED:
        return this.props.questions.filter(question => question.answers.length === 0);
      case questionsFilters.SHOW_ANSWERED:
        return this.props.questions.filter(question => question.answers.length !== 0);
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Header openAskQuestionPopup={this.openAskQuestionPopup} />
        <FilterMenu activeFilter={this.props.filter} setFilter={this.props.setFilter} />
        <QuestionsMainList questions={this.filterQuestions(this.props.filter)} />
        <AskQuestionPopup popupIsActive={this.state.askQuestionPopupIsActive} closePopup={this.closeAskQuestionPopup} />
      </div>
    );
  }
}

HomePage.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      answers: PropTypes.array.isRequired,
      date: PropTypes.instanceOf(Date).isRequired
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
