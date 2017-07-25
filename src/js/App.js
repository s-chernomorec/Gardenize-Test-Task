import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Router from './components/Router';
import configureStore from './store/configureStore';

import initialData from './initialData';



const store = configureStore(initialData);

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

render(<App />, document.getElementById('app'));
