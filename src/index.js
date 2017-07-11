import React from 'react';
import {render} from 'react-dom';
import './global-styles/index.css';
import App from './containers/app';
// import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';

const mountNode = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>, mountNode);
// registerServiceWorker();
