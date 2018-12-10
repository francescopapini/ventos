import React, { Component } from 'react'

class MosaicSelectMenu extends Component {
  render() {
    return (
      <div className="row text-center select-menu">
        <div className="col-lg-4 mosaic-select-button house-button py-2" onClick={this.props.clickHouseBtn}>
          The House
        </div>
        <div className="col-lg-4 mosaic-select-button rooms-button py-2" onClick={this.props.clickRoomsBtn}>
          The Rooms
        </div>
        <div className="col-lg-4 mosaic-select-button others-button py-2" onClick={this.props.clickOthersBtn}>
          Others
        </div>
      </div>
    );
  }
}

export default MosaicSelectMenu;
