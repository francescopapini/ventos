import React, { Component } from 'react'

class MosaicSelectMenu extends Component {
  render() {
    return (
      <div className="row text-center">
        <div className="col-lg-4">
          <div className="btn">
            The House
          </div>
        </div>
        <div className="col-lg-4">
          <div className="btn">
            The Rooms
          </div>
        </div>
        <div className="col-lg-4">
          <div className="btn">
            Others
          </div>
        </div>
      </div>
    );
  }
}

export default MosaicSelectMenu;
