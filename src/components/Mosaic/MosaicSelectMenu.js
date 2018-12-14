import React from 'react';

const MosaicSelectMenu = props => (
  <div className="row text-center select-menu">
    <div className="col-lg-4 mosaic-select-button house-button py-2" onClick={props.clickHouseBtn}>
      The House
    </div>
    <div className="col-lg-4 mosaic-select-button rooms-button py-2" onClick={props.clickRoomsBtn}>
      The Rooms
    </div>
    <div
      className="col-lg-4 mosaic-select-button others-button py-2"
      onClick={props.clickOthersBtn}
    >
      Others
    </div>
  </div>
);

export default MosaicSelectMenu;
