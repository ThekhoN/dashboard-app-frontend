import React, {Component} from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import UserAvatar from '../../components/user-avatar';
import UserInfoDisplay from '../../components/user-info-display';
import './style.css';
import {connect} from 'react-redux';
import {activateRightPanel, deactivateRightPanel, deleteSelectedUser} from '../../actions/actionCreators';

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

// const RightPanel = ({
//   activeState,
//   handleActivateRightPanel,
//   handleDeactivateRightPanel,
//   handleClickOutside
// }) => {
//   const controlClickEvent = activeState ? handleDeactivateRightPanel : handleActivateRightPanel;
//   return (
//     <div className={`right-panel panel-shadow ${activeState}`}>
//       <div className='right-panel-control' onClick={controlClickEvent} />
//       <UserAvatar imgSrc={dummyData.profilePhoto} title='user-avatar-picture' />
//       <UserInfoDisplay data={dummyData} />
//     </div>
//   );
// };

class RightPanel extends Component {
  handleClickOutside () {
    const {activeState, handleDeactivateRightPanel, handleDeleteSelectedUser} = this.props;
    if (activeState) {
      handleDeactivateRightPanel();
      handleDeleteSelectedUser();
    }
  }
  render () {
    const {
      activeData,
      activeState,
      handleActivateRightPanel,
      handleDeactivateRightPanel
    } = this.props;
    console.log('activeData: ', activeData);
    const controlClickEvent = activeState ? handleDeactivateRightPanel : handleActivateRightPanel;
    const displayControlClass = activeData ? 'active' : '';
    return (
      <div className={`right-panel panel-shadow ${activeState}`}>
        <div className={`right-panel-control ${displayControlClass}`} onClick={controlClickEvent} />
        <UserAvatar imgSrc={activeData.profilePhoto} title='user-avatar-picture' />
        <UserInfoDisplay data={activeData} />
      </div>
    );
  }
}

const EnhancedRightPanel = enhanceWithClickOutside(RightPanel);

const mapStateToProps = state => ({
  activeState: state.interactionStates.rightPanel,
  activeData: state.selectedUser.activeData
});

const mapDispatchToProps = dispatch => ({
  handleActivateRightPanel: () => {
    dispatch(activateRightPanel());
  },
  handleDeactivateRightPanel: () => {
    dispatch(deactivateRightPanel());
  },
  handleDeleteSelectedUser: () => {
    dispatch(deleteSelectedUser());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EnhancedRightPanel);
