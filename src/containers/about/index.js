import React from 'react';
import {connect} from 'react-redux';
import Nav from '../nav';

const About = ({userEmail}) => (
  <div>
    <Nav />
    <br />
    <h3>About this admin. . .</h3>
    email: <span className='special'>{userEmail}</span>
  </div>
);

const mapStateToProps = (state) => ({
  userEmail: state.userDetail.email
});

export default connect(mapStateToProps, null)(About);
