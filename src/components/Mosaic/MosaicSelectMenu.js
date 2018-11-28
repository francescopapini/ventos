import React, { Component } from 'react'

class MosaicSelectMenu extends Component {
  constructor(props) {
    super(props);
    this.state ={ isHidden: true }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
      <div className="row text-center select-menu">
        <div className="col-lg-4 mosaic-select-button house-button">
          <div className="btn" onClick={this.toggleHidden.bind(this)}>
            The House
          </div>
        </div>
        <div className="col-lg-4 mosaic-select-button rooms-button">
          <div className="btn" onClick={this.toggleHidden.bind(this)}>
            The Rooms
          </div>
        </div>
        <div className="col-lg-4 mosaic-select-button others-button">
          <div className="btn" onClick={this.toggleHidden.bind(this)}>
            Others
          </div>
        </div>
      </div>
    );
  }
}

export default MosaicSelectMenu;
