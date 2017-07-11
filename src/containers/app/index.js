import React from 'react';
import {Switch, Route, HashRouter as Router} from 'react-router-dom';
import Home from '../home';
import Dashboard from '../dashboard';
import Signout from '../signout';
import requireAuth from '../../HOC/requireAuth';
import Signup from '../signup';

const NotFound = () => (
  <h2>404 Not Found!</h2>
);

const About = () => (
  <h2>About </h2>
);

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={requireAuth(About)} />
      <Route exact path='/user' component={requireAuth(Dashboard)} />
      <Route exact path='/signout' component={Signout} />
      <Route exact path='/signup' component={Signup} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
