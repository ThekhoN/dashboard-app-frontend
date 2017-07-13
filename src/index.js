import React from 'react';
import {render} from 'react-dom';
import './global-styles/index.css';
import App from './containers/app';
// import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';
import ioClient from 'socket.io-client';
import {ROOT_URL} from './api' ;
import {getUserDataDispatcher} from './actions/actionCreators';
let io = ioClient(`${ROOT_URL}`);
io.on('db updated', (message) => {
  setTimeout(
    () => {
      console.log('message from Server on connect: ', message + ' ' + Date.now());
      store.dispatch(getUserDataDispatcher(`${ROOT_URL}/api`));
    }, 300);
});
if (window.localStorage) {
  const token = localStorage.getItem('token');
  const adminEmail = localStorage.getItem('userEmail');
  if (token && adminEmail) {
    store.dispatch({
      type: 'AUTH_USER'
    });
    store.dispatch({
      type: 'FETCH_ADMIN_DATA',
      payload: adminEmail
    });
  } else {
    store.dispatch({
      type: 'UNAUTH_USER'
    });
  }
}

const mountNode = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>, mountNode);
// registerServiceWorker();
