import React, { Component } from 'react'
import HouseMosaic from '../Mosaic/HouseMosaic'
import RoomsMosaic from '../Mosaic/RoomsMosaic'
import MosaicSelectMenu from '../Mosaic/MosaicSelectMenu'
 
class Gallery extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Gallery</h1>
        <MosaicSelectMenu />
        <HouseMosaic />
        <RoomsMosaic />
      </div>
    );
  }
}

export default Gallery;
 