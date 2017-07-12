import React from 'react';
import UserAvatar from '../../components/user-avatar';
import UserInfoDisplay from '../../components/user-info-display';
import './style.css';
import {connect} from 'react-redux';
import {activateRightPanel, deactivateRightPanel} from '../../actions/actionCreators';

const dummyData = {
  '_id': '596644b761aff81988749bf0',
  'gender': 'female',
  'locale': 'EN_In',
  'profilePhoto': 'https://i1.sdlcdn.com/static/img/marketing-mailers/mailer/2016/upload999/female01.png',
  'timezone': 'GMT+5.5',
  'lat': '18.5204',
  'long': '73.8567',
  '__v': 0,
  'timeStamp': '2017-07-12T15:48:07.409Z'
};

const RightPanel = ({activeState, handleActivateRightPanel, handleDeactivateRightPanel}) => {
  const controlClickEvent = activeState ? handleDeactivateRightPanel : handleActivateRightPanel;
  return (
    <div className={`right-panel panel-shadow ${activeState}`}>
      <div className='right-panel-control' onClick={controlClickEvent} />
      <UserAvatar imgSrc={dummyData.profilePhoto} title='user-avatar-picture' />
      <UserInfoDisplay data={dummyData} />
    </div>
  );
};

const mapStateToProps = state => ({
  activeState: state.interactionStates.rightPanel
});

const mapDispatchToProps = dispatch => ({
  handleActivateRightPanel: () => {
    dispatch(activateRightPanel());
  },
  handleDeactivateRightPanel: () => {
    dispatch(deactivateRightPanel());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RightPanel);
