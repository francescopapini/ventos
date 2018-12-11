import React from 'react';
import MosaicCard from './MosaicCard';

const folderPath = 'gallery/other_images/';
const otherImgs = [
  'other1.jpeg',
  'other2.jpeg',
  'other3.jpeg',
  'other4.jpeg',
  'other5.jpeg',
  'other6.jpeg',
  'other7.jpeg',
  'other8.jpeg'
];

const OtherMosaic = () => (
  <div className="card-columns">
    {otherImgs.map(i => (
      <MosaicCard folder_path={folderPath} image_url={i} key={i} />
    ))}
  </div>
);
export default OtherMosaic;
