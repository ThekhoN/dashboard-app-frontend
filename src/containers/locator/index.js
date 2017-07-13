import React, {Component} from 'react';
import {setSelectedUser, activateRightPanel} from '../../actions/actionCreators';
import './style.css';
import {connect} from 'react-redux';

const HOVER_STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

class Locator extends Component {
  constructor (props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.handleClickState = this.handleClickState.bind(this);
    this.state = {
      hoverClass: HOVER_STATUS.NORMAL,
      clicked: false,
      newMountActive: true
    };
  }
  onMouseEnter () {
    this.setState({
      hoverClass: HOVER_STATUS.HOVERED
    });
  }
  onMouseLeave () {
    this.setState({
      hoverClass: HOVER_STATUS.NORMAL
    });
  }
  componentDidMount () {
    // console.log('mounted locator!!!');
    setTimeout(() => {
      this.setState({
        newMountActive: false
      });
    }, 300);
  }
  handleClickState () {
    this.setState({
      clicked: !this.state.clicked
    }, () => {
      setTimeout(() => {
        this.setState({
          clicked: false
        });
      }, 300);
    });
  }
  render () {
    const clickState = this.state.clicked ? 'active' : '';
    const newMountActiveState = this.state.newMountActive ? 'new-mount-active' : '';
    const {data, handleSetSelectedUser, handleActivateRightPanel} = this.props;
    const selectedState = this.props.selected ? 'selected' : '';
    return (
      <div
        onClick={() => {
          handleSetSelectedUser(data);
          handleActivateRightPanel();
          this.handleClickState();
        }}
        className={`locator ${this.state.hoverClass} ${selectedState} ${clickState}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} >
        <div className='locator-inner' />
        <span className={`locator-effects ${clickState} ${newMountActiveState}`} onClick={(e) => {
          e.stopPropagation();
        }} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeId: state.selectedUser.activeData._id
});

const mapDispatchToProps = dispatch => ({
  handleSetSelectedUser: (data) => {
    dispatch(setSelectedUser(data));
  },
  handleActivateRightPanel: () => {
    dispatch(activateRightPanel());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Locator);
