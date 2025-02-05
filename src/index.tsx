import React from 'react';

import './index.css';

import ReactDOM from 'react-dom';

import App from './App';
import { worker } from './mocks';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass',
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
