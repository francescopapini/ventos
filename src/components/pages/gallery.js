import React, { Component } from 'react'
import HouseMosaic from '../Mosaic/HouseMosaic'
import RoomsMosaic from '../Mosaic/RoomsMosaic'
import OthersMosaic from '../Mosaic/OthersMosaic'
import MosaicSelectMenu from '../Mosaic/MosaicSelectMenu'
 
class Gallery extends Component {
  state = {
    houseMosaicVisible: true,
    roomsMosaicVisible: false,
    othersMosaicVisible: false
  }
  
  handleGalleryClick = (button_type) => {
    this.setState({houseMosaicVisible: !this.state.houseMosaicVisible})
    this.setState({roomsMosaicVisible: !this.state.roomsMosaicVisible})
    this.setState({othersMosaicVisible: !this.state.othersMosaicVisible})
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Gallery</h1>
        < MosaicSelectMenu clickBtn={this.handleGalleryClick} />
        {this.state.houseMosaicVisible && <HouseMosaic />}
        {this.state.roomsMosaicVisible && <RoomsMosaic />}
        {this.state.othersMosaicVisible && <OthersMosaic />}
      </div>
    );
  }
}

export default Gallery;
 