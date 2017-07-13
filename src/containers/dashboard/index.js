import React, {Component} from 'react';
import {connect} from 'react-redux';
import WorldMap from '../world-map';
import {getUserDataDispatcher} from '../../actions/actionCreators';
import {ROOT_URL} from '../../api';
import LeftPanel from '../left-panel';
import RightPanel from '../right-panel';
import './style.css';

class Dashboard extends Component {
  componentDidMount () {
    const {handleFetchUserData} = this.props;
    handleFetchUserData(`${ROOT_URL}/api`);
  }
  render () {
    return (
      <div className='dashboard'>
        <LeftPanel />
        <RightPanel />
        <WorldMap />
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
