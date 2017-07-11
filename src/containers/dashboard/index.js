import React, {Component} from 'react';
import {connect} from 'react-redux';
import Nav from '../nav';
import WorldMap from '../world-map';
import {getUserDataDispatcher} from '../../actions/actionCreators';
import {ROOT_URL} from '../../api';

class Dashboard extends Component {
  componentDidMount () {
    const {handleFetchUserData} = this.props;
    handleFetchUserData(`${ROOT_URL}/api`);
  }
  render () {
    return (
      <div>
        <Nav />
        <br />
        <div style={{
          width: '100%',
          height: '480px'
        }}>
          <WorldMap />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleFetchUserData: (url) => {
    dispatch(getUserDataDispatcher(url));
  }
});

export default connect(null, mapDispatchToProps)(Dashboard);
