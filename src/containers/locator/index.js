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
      clicked: false
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
  handleClickState (e) {
    // e.stopPropagation();
    // console.log('this.props.id: ', this.props.id);
    // console.log('this.props.activeId: ', this.props.activeId);
    this.setState({
      clicked: !this.state.clicked
      // selected: !this.state.selected
    }, () => {
      setTimeout(() => {
        this.setState({
          clicked: false
        });
      });
    });
  }
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.selected !== nextProps.selected) {
      console.log('should update now...');
      return true;
    } else {
      console.log('should not update');
      return false;
    }
  }
  render () {
    const clickState = this.state.clicked ? 'active' : '';
    const {data, handleSetSelectedUser, handleActivateRightPanel} = this.props;
    const selectedState = this.props.selected ? 'selected' : '';
    return (
      <div
        onClick={(e) => {
          handleSetSelectedUser(data);
          handleActivateRightPanel();
          this.handleClickState(e);
        }}
        className={`locator ${this.state.hoverClass} ${selectedState} ${clickState}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} >
        <div className='locator-inner' />
        <span className={`locator-effects ${clickState}`} onClick={(e) => {
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
