import React, {Component} from 'react';
import LandingAuth from '../landing-auth';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export class Home extends Component {
  render () {
    const {authenticated} = this.props;
    if (authenticated) {
      return (
        <Redirect to='/user' />
      );
    }
    return (
      <LandingAuth />
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, null)(Home);
