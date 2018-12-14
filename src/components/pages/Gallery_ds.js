import React, { Component } from 'react';
import HouseMosaic from '../Mosaic/HouseMosaic';
import RoomsMosaic from '../Mosaic/RoomsMosaic';
import OthersMosaic from '../Mosaic/OthersMosaic';
import MosaicSelectMenu from '../Mosaic/MosaicSelectMenu';

class Gallery extends Component {
  state = {
    houseMosaicVisible: true,
    roomsMosaicVisible: false,
    othersMosaicVisible: false,
  };

  houseButtonClickHandler = () => {
    this.setState({ houseMosaicVisible: true });
    this.setState({ roomsMosaicVisible: false });
    this.setState({ othersMosaicVisible: false });
  };

  roomsButtonClickHandler = () => {
    this.setState({ houseMosaicVisible: false });
    this.setState({ roomsMosaicVisible: true });
    this.setState({ othersMosaicVisible: false });
  };

  othersButtonClickHandler = () => {
    this.setState({ houseMosaicVisible: false });
    this.setState({ roomsMosaicVisible: false });
    this.setState({ othersMosaicVisible: true });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Gallery</h1>
        <MosaicSelectMenu
          clickHouseBtn={this.houseButtonClickHandler}
          clickRoomsBtn={this.roomsButtonClickHandler}
          clickOthersBtn={this.othersButtonClickHandler}
        />
        {this.state.houseMosaicVisible && <HouseMosaic />}
        {this.state.roomsMosaicVisible && <RoomsMosaic />}
        {this.state.othersMosaicVisible && <OthersMosaic />}
      </div>
    );
  }
}

export default Gallery;
