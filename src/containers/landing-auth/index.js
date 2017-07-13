import React, {Component} from 'react';
import Signin from '../signin';
import {Link} from 'react-router-dom';
import './style.css';

class LandingAuth extends Component {
  render () {
    return (
      <div className='landing-auth'>
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
