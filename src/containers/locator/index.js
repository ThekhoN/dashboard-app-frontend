import React, {Component} from 'react';
import {setSelectedUser, activateRightPanel} from '../../actions/actionCreators';
import './style.css';
import {connect} from 'react-redux';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
};

class Locator extends Component {
  constructor (props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      class: STATUS.NORMAL
    };
  }
  onMouseEnter () {
    this.setState({
      class: STATUS.HOVERED
    });
  }
  onMouseLeave () {
    this.setState({
      class: STATUS.NORMAL
    });
  }
  render () {
    const {data, handleSetSelectedUser, handleActivateRightPanel} = this.props;
    return (
      <div
        onClick={() => {
          handleSetSelectedUser(data);
          handleActivateRightPanel();
        }}
        className={`locator ${this.state.class}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSetSelectedUser: (data) => {
    dispatch(setSelectedUser(data));
  },
  handleActivateRightPanel: () => {
    dispatch(activateRightPanel());
  }
});

export default connect(null, mapDispatchToProps)(Locator);
