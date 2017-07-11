import React, {Component} from 'react';
import './style.css';

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
    return (
      <div
        className={`locator ${this.state.class}`}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave} />
    );
  }
}

export default Locator;
