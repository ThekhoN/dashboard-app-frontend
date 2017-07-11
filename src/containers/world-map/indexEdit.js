import React, {Component} from 'react';
import {connect} from 'react-redux';
import Map, {Marker, InfoWindow} from 'google-maps-react'
import {GOOGLE_MAP_API_KEY} from '../../api';
import Locator from '../../components/locator';
import './style.css';
import Container from './container';

// class WorldMap extends Component {
//   render () {
//     const {userData} = this.props;
//     return (
//       <Map google={window.google} zoom={14} >
//         <Marker />
//       </Map>
//     );
//   }
// }

class WorldMap extends Component {
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
    return (
      <Container userData={this.props.userData}/>
    );
  }
}

/*
const WorldMap = React.createClass({
  getInitialState: function() {
    return {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  },

  onMarkerClick: function(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  },

  onInfoWindowClose: function() {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  },

  onMapClicked: function(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  },

  render: function() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    return (
      <Map google={this.props.google}
          style={{width: '100%', height: '100%', position: 'relative'}}
          className={'map'}
          zoom={14}
          onClick={this.onMapClicked}>
        <Marker
          onClick={this.onMarkerClick}
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />
        <Marker
          onClick={this.onMarkerClick}
          name={'Dolores park'}
          position={{lat: 37.759703, lng: -122.428093}} />
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
});
*/

const mapStateToProps = state => ({
  userData: state.userData.data
});

export default connect(mapStateToProps, null)(WorldMap);
