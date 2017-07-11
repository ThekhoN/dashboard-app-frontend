import React, {Component} from 'react';
import {connect} from 'react-redux';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_API_KEY} from '../../api';
import Locator from '../../components/locator';
import './style.css';
/*
<Locator
  lat={28.7041}
  lng={77.1025}
  text={'Delhi'}
/>

{
  userData.map(e =>
    <Locator
      key={e._id}
      long={e.long}
      lat={e.lat} />
  )
}
*/

const GetLocators = () => (
[
  <Locator
lat={28.7041}
lng={77.1025}
/>,
<Locator
lat={38.7041}
lng={71.1025}
/>]);


class WorldMap extends Component {
  render () {
    const {userData} = this.props;
    console.log('userData: ', userData);
    const Locators = () => userData.map(e => (
      <Locator
        key={e._id}
        lat={59.955413}
        lng={30.337844}
        text={'Kreyser Avrora'} />
    ));
    return (
      <div className='world-map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        {
          userData.map(e => <Locator key={e._id} lat={e.lat}/>)
        }
        </GoogleMapReact>
      </div>
    );
  }
}


/*
<div className='world-map-container'>
  <GoogleMapReact
    bootstrapURLKeys={{key: GOOGLE_MAP_API_KEY}}
    defaultCenter={this.props.center}
    defaultZoom={this.props.zoom}
  >
  {
    Locators()
  }
  </GoogleMapReact>
</div>
*/

WorldMap.defaultProps = {
  center: {lat: 28.7041, lng: 77.1025},
  zoom: 0
};

const mapStateToProps = state => ({
  userData: state.userData.data
});

export default connect(mapStateToProps, null)(WorldMap);
