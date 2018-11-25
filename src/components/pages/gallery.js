import React, { Component } from 'react'
import Mosaic from '../../components/mosaic'
import MosaicSelectMenu from '../../components/mosaic_select_menu'
 
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
 