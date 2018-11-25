import React, { Component } from 'react'
import Mosaic from '../../components/Mosaic'
import MosaicSelectMenu from '../../components/MosaicSelectMenu'
 
class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Gallery</h1>
        <MosaicSelectMenu />
        <Mosaic />
      </div>
    );
  }
}

export default Gallery;
 