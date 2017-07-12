import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_API_KEY} from '../../api';
import Locator from '../locator';
import './style.css';

const createMapOptions = maps =>
  ({
    panControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
});

class WorldMap extends Component {
  render () {
    const {userData} = this.props;
    // console.log('userData: ', userData);
    return (
      <div className='world-map-container'>
        <GoogleMapReact
          bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {
            userData.map(e => <Locator data={e} key={e._id} lat={e.lat} lng={e.long} />)
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
  userData: state.userData.data
});

export default connect(mapStateToProps, null)(WorldMap);
