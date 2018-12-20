import React, { Component } from 'react';

const google = window.google;

class GoogleMap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      scrollwheel: false,
      zoom: 15,
      draggable: true,
      mapTypeControl: false,
      streetViewControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
        style: google.maps.ZoomControlStyle.LARGE,
      },
      center: new google.maps.LatLng(-3.6291, -38.720654),
    });

    new google.maps.Marker({
      position: new google.maps.LatLng(-3.6346305, -38.72027),
      map: this.map,
      title: 'We are here!',
    });
  }

  render() {
    const mapStyle = {
      height: '300px',
      width: '100%',
      marginBottom: '40px',
    };

    return <div ref="map" style={mapStyle} />;
  }
}

export default GoogleMap;
