import React from 'react';
import MosaicCard from './MosaicCard';

const folderPath = 'gallery/house_images/';
const houseImgs = [
  'house1.jpeg',
  // "house2.jpeg",
  // "house3.jpeg",
  'house4.jpeg',
  // "house5.jpeg",
  'house6.jpeg',
  'house7.jpeg',
  'house8.jpeg'
  // "house9.jpeg"
];

const HouseMosaic = () => (
  <div>
    <div className="card-columns">
      {houseImgs.map(i => (
        <MosaicCard folder_path={folderPath} image_url={i} key={i} />
      ))}
    </div>
  </div>
);

export default HouseMosaic;
