import React, { Component } from 'react'
import HouseMosaic from '../Mosaic/HouseMosaic'
import RoomsMosaic from '../Mosaic/RoomsMosaic'
import OtherMosaic from '../Mosaic/OtherMosaic'
import MosaicSelectMenu from '../Mosaic/MosaicSelectMenu'
 
class Gallery extends Component {
  state = {
    imgVisible: true
  }
  
  handleGalleryClick = () => {
    this.setState({imgVisible: !this.state.imgVisible})
    console.log('test')
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Gallery</h1>
        < MosaicSelectMenu clickBtn={this.handleGalleryClick} />
        < HouseMosaic toggleVisible={this.state.imgVisible}/>
        < RoomsMosaic />
        < OtherMosaic />
      </div>
    );
  }
}

export default Gallery;
 