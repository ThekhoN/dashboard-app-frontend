import React from 'react';
import AdminAvatar from '../../components/admin-avatar';
import DashboardButtonWrapper from '../../components/dashboard-button-wrapper';
import './style.css';
import {connect} from 'react-redux';
import {signoutUser, activateLeftPanel, deactivateLeftPanel} from '../../actions/actionCreators';

const dummyData = {
  '__v': 0,
  'gender': 'female',
  'locale': 'en-IN',
  'profilePhoto': 'http://i1.sdlcdn.com/static/img/marketing-mailers/mailer/2016/upload999/male01.png',
  'timezone': 'GMT+05:5',
  'lat': '26.9716',
  'long': '59.5946',
  '_id': '5965c51e5dcd2530ec48eaaf',
  'timeStamp': '2017-07-12T06:43:42.832Z'
};

const LeftPanel = ({
  activeState,
  data,
  adminEmail,
  handleSignOutUser,
  handleActivateLeftPanel,
  handleDeactivateLeftPanel
}) => {
  // const controlClickEvent = activeState ? handleDeactivateLeftPanel : handleActivateLeftPanel;
  return (
    <div className={`left-panel panel-shadow ${activeState}`}>
      {/* {<div className='left-panel-control' onClick={controlClickEvent} />} */}
      <AdminAvatar imgSrc={dummyData.profilePhoto} title={adminEmail} />
      <DashboardButtonWrapper handleOnClick={handleSignOutUser}>
        Sign out
      </DashboardButtonWrapper>
    </div>
  );
};

const mapStateToProps = state => ({
  adminEmail: state.adminData.email,
  activeState: state.interactionStates.leftPanel
});

const mapDispatchToProps = dispatch => ({
  handleSignOutUser: () => {
    dispatch(signoutUser());
  },
  handleActivateLeftPanel: () => {
    dispatch(activateLeftPanel());
  },
  handleDeactivateLeftPanel: () => {
    dispatch(deactivateLeftPanel());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);
