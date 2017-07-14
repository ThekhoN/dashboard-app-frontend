import React, {Component} from 'react';
import {connect} from 'react-redux';
import WorldMap from '../world-map';
import {getUserDataDispatcher} from '../../actions/actionCreators';
import {ROOT_URL} from '../../api';
import LeftPanel from '../left-panel';
import RightPanel from '../right-panel';
import LoaderComponent from '../../components/loader-component';
import './style.css';

class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.handleDisplayContents = this.handleDisplayContents.bind(this);
  }
  handleDisplayContents () {
    const {firstUserDataLoaded} = this.props;
    if (!firstUserDataLoaded) {
      return (
        <span>
          <LeftPanel />
          <RightPanel />
          <LoaderComponent />
        </span>
      );
    } else {
      return (
        <span>
          <LeftPanel />
          <RightPanel />
          <WorldMap />
        </span>
      );
    }
  }
  componentDidMount () {
    const {handleFetchUserData} = this.props;
    handleFetchUserData(`${ROOT_URL}/api`);
  }
  render () {
    return (
      <div className='dashboard'>
        {this.handleDisplayContents()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstUserDataLoaded: state.userData.firstLoaded
});
const mapDispatchToProps = dispatch => ({
  handleFetchUserData: (url) => {
    dispatch(getUserDataDispatcher(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
