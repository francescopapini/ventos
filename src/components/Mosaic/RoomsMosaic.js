import React from 'react';
import MosaicCard from './MosaicCard';

const folderPath = 'gallery/rooms_images/';
const roomsImgs = [
  'room1.jpeg',
  'room2.jpeg',
  'room3.jpeg',
  'room4.jpeg',
  'room5.jpeg',
  'room6.jpeg'
];

const RoomsMosaic = () => (
  <div className="card-columns">
    {roomsImgs.map(i => (
      <MosaicCard folder_path={folderPath} image_url={i} key={i} />
    ))}
  </div>
);
export default RoomsMosaic;
