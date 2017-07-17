import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_API_KEY} from '../../api';
import Locator from '../locator';
import './style.css';
// const createMapOptions = maps =>
//   ({
//     panControl: false,
//     mapTypeControl: false,
//     scrollwheel: false,
//     styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
// });

const createMapOptions = maps =>
  ({
    zoomControl: false,
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false
  });

class WorldMap extends Component {
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        active: true
      });
    }, 300);
  }
  render () {
    const {userData, activeId} = this.props;
    const renderLocators = () => {
      return userData.map(e => {
        if (e._id === activeId) {
          return (<Locator data={e} id={e._id} key={e._id} lat={e.lat} lng={e.long} selected='true' />);
        } else {
          return (<Locator data={e} id={e._id} key={e._id} lat={e.lat} lng={e.long} selected='' />);
        }
      });
    };
    return (
      <div className='world-map-container'>
        <GoogleMapReact
          options={createMapOptions}
          bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
            renderLocators()
          }
        </GoogleMapReact>
      </div>
    );
  }
}

WorldMap.defaultProps = {
  center: {lat: 28.7041, lng: 77.1025},
  zoom: 0
};

const mapStateToProps = state => ({
  userData: state.userData.data,
  activeId: state.selectedUser.activeData._id
});

export default connect(mapStateToProps, null)(WorldMap);
