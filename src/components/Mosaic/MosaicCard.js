import React from 'react';

const MosaicCard = props => (
  <div className="card">
    <img
      src={require(`../../assets/images/${props.folder_path}${props.image_url}`)}
      alt=""
      className="card-img-top"
    />
  </div>
);

export default MosaicCard;
