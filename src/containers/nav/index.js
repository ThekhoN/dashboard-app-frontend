import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import styles from './style.css';

export class Nav extends Component {
  constructor (props) {
    super(props);
    this.handleRenderSignout = this.handleRenderSignout.bind(this);
  }
  handleRenderSignout () {
    const {authenticated} = this.props;
    if (authenticated) {
      return (
        <NavLink
          className={styles.navLink}
          to='/signout'>Sign out</NavLink>
      );
    }
  }
  render () {
    return (
          <div className='nav'>
            <NavLink exact to='/user'
              className={styles.navLink}
              activeClassName={styles.active}>
              Dashboard
            </NavLink>
            <NavLink exact to='/about'
              className={styles.navLink}
              activeClassName={styles.active}>
              About
            </NavLink>
            {this.handleRenderSignout()}
          </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, null)(Nav);
