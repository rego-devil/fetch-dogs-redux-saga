import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ErrorBoundary } from './error-boundary';
import { store } from './redux/store';
import { App } from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
