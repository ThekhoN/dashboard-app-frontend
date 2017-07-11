import React, {Component} from 'react';
import GoogleApiWrapper from '../../components/GoogleApiComponent';
import {GOOGLE_MAP_API_KEY} from '../../api';
import Map, {Marker, InfoWindow} from 'google-maps-react'

/*
<Marker
  onClick={this.onMarkerClick}
  name={'SOMA'}
  position={{lat: 37.778519, lng: -122.405640}} />
*/

class Container extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onInfoWindowClose () {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
  render () {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    const {userData} = this.props;
    // console.log(userData);
    if (!this.props.loaded) {
      return (<div>Loading. . .</div>)
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
            style={{width: '100%', height: '100%', position: 'relative'}}
            className={'map'}
            zoom={14}
            onClick={this.onMapClicked}>
            {
              userData.map(e => <Marker
                key={e._id}
                name={'Marked Place'}
                position={{lat: e.lat, lng: e.long}}
                  />)
            }
        </Map>
      </div>
      );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
  libraries: ['places','visualization']
})(Container)
