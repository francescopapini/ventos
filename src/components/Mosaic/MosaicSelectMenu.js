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
          <button className="btn" onClick={this.props.clickBtn}>
          {/* <div className="btn"> */}
            The Rooms
          {/* </div> */}
        </button>
        </div>
        <div className="col-lg-4 mosaic-select-button others-button">
        <button className="btn" onClick={this.props.clickBtn}>
          {/* <div className="btn"> */}
            Others
          {/* </div> */}
          </button>
        </div>
      </div>
    );
  }
}

export default MosaicSelectMenu;
