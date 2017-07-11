import React from 'react';
import {render} from 'react-dom';
import './global-styles/index.css';
import App from './containers/app';
// import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';
import ioClient from 'socket.io-client'
import {ROOT_URL} from './api' ;
let io = ioClient(`${ROOT_URL}`);
// io.on('hi', (message) => {
//   console.log('message from Server: ', message);
// });
// io.on('db read', (message) => {
//   console.log('message from Server: ', message);
// });
io.on('db post', (message) => {
  // console.log('message from Server on db post: ', message);
  setTimeout(
    () => {
      // alert(message);
      console.log('message from Server on db post: ', message + ' ' + Date.now());
      const test999 = document.getElementById('test999');
      test999.innerHTML = message + ': ' + Date.now();
      // store.dispatch({
      //   type: 'RELOADING_USER_DATA'
      // });
    }, 300);
});

const mountNode = document.getElementById('root');

render(
  <Provider store={store}>
    <App />
  </Provider>, mountNode);
// registerServiceWorker();
