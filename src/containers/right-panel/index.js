import React, {Component} from 'react';
import enhanceWithClickOutside from 'react-click-outside';
import UserAvatar from '../../components/user-avatar';
import UserInfoDisplay from '../../components/user-info-display';
import SVGWrapper from '../../components/svg-wrapper';
import './style.css';
import {connect} from 'react-redux';
import {activateRightPanel, deactivateRightPanel, deleteSelectedUser} from '../../actions/actionCreators';

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
    const controlClickEvent = activeState ? handleDeactivateRightPanel : handleActivateRightPanel;
    const displayControlClass = activeData ? 'active' : '';
    // const svgControlPath = <path fill='#A8AAAD' d='M10.9 8.4c0-.6.3-.7.7-.3l6.8 6.3c.4.4.4 1 0 1.4l-6.8 6.3c-.4.4-.7.2-.7-.3V8.4z' />;
    return (
      <div className={`right-panel panel-shadow ${activeState}`}>
        <div className={`right-panel-control ${displayControlClass}`} onClick={controlClickEvent}>
          <div className='responsive-svg-wrapper'>
            <svg className='svg-icon' xmlns='http://www.w3.org/2000/svg' width='13px' height='24px' viewBox='0 0 22 22' aria-labelledby='title'>
              <title id='title'>control</title>
              <path fill='#A8AAAD' d='M10.9 8.4c0-.6.3-.7.7-.3l6.8 6.3c.4.4.4 1 0 1.4l-6.8 6.3c-.4.4-.7.2-.7-.3V8.4z' />
            </svg>
          </div>
        </div>
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
