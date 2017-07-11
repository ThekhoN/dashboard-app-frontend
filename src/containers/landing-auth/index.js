import React, {Component} from 'react';
import Signin from '../signin';
import {Link} from 'react-router-dom';

class LandingAuth extends Component {
  render () {
    return (
      <div>
        <h2>Welkommen!</h2>
        <br />
        <Signin />
        <br />
        <Link to='/signup'>
          Click here to sign up
        </Link>
      </div>
    );
  }
}

export default LandingAuth;
