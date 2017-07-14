import React, {Component} from 'react';
import Signin from '../signin';
import {Link} from 'react-router-dom';
import './style.css';

class LandingAuth extends Component {
  render () {
    return (
      <div className='landing-auth form-container-wrapper'>
        <Signin />
        <div className='landing-auth-signup'>
          <Link to='/signup'>
            Click here to <b>sign up</b>
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingAuth;
