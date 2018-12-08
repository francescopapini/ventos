import React, { Component } from 'react'

class MosaicSelectMenu extends Component {
  render() {
    return (
      <div className="row text-center select-menu">
        <div className="col-lg-4 mosaic-select-button house-button">
          <div className="btn" onClick={this.props.clickHouseBtn}>          
            The House
            </div>
        </div>
        <div className="col-lg-4 mosaic-select-button rooms-button">
          <div className="btn" onClick={this.props.clickRoomsBtn}>
            The Rooms
          </div>
        </div>
        <div className="col-lg-4 mosaic-select-button others-button">
          <div className="btn" onClick={this.props.clickOthersBtn}>
            Others
          </div>
        </div>
      </div>
    );
  }
}

export default MosaicSelectMenu;
