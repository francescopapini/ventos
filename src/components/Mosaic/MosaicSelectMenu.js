import React, { Component } from 'react'

class MosaicSelectMenu extends Component {
  render() {
    return (
      <div className="row text-center select-menu">
        <div className="col-lg-4 mosaic-select-button house-button">
          <button className="btn" onClick={this.props.clickBtn}>
            The House
          </button>
        </div>
        <div className="col-lg-4 mosaic-select-button rooms-button">
          <div className="btn">
            The Rooms
          </div>
        </div>
        <div className="col-lg-4 mosaic-select-button others-button">
          <div className="btn">
            Others
          </div>
        </div>
      </div>
    );
  }
}

export default MosaicSelectMenu;
