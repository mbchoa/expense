import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expenseApp from '../redux-app/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let store = createStore(expenseApp);
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, div);
});
