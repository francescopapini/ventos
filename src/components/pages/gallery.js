import React, { Component } from 'react'
import Mosaic from '../../components/mosaic'
 
class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Gallery</h1>
        <Mosaic />
      </div>
    );
  }
}

export default Gallery;
 