import React, { Component } from 'react'

class MosaicSelectMenu extends Component {
  constructor(props) {
    super(props);
    this.state ={ show: true }
    this.displayHouseImages = this.displayHouseImages.bind(this);
  }

  displayHouseImages = () => {
    const { show } = this.state;
    this.setState( { show: !show })
  }

  render() {
    return (
      <div className="row text-center select-menu">
        <div className="col-lg-4 mosaic-select-button house-button">
          <div className="btn" onClick={ this.displayHouseImages }>
            The House
          </div>
        </div>
        <div className="col-lg-4 mosaic-select-button rooms-button">
          <div className="btn" onClick={ this.displayHouseImages }>
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
