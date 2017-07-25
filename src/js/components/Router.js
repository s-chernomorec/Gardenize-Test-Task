import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './homePage/HomePage';
import QuestionPage from './questionPage/QuestionPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/questions/:questionID" component={QuestionPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
