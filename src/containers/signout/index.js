import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {signoutUser} from '../../actions/actionCreators';

class Signout extends Component {
  componentWillMount () {
    this.props.handleSignoutUser();
  }
  render () {
    return (
      <div>
        Sorry to see you go. . .
        <br />
        <br />
        <Link to='/'>Sign in again. . .</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignoutUser: () => {
    dispatch(signoutUser());
  }
});

export default connect(null, mapDispatchToProps)(Signout);
