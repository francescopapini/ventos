import React, { Component } from 'react'
import MosaicCard  from './MosaicCard'

class RoomsMosaic extends Component {

  render() {
    const folder_path = "gallery/rooms_images/";
    const roomsImgs = [ "landscape.jpg",
                        "landscape.jpg",
                        "landscape.jpg",
                        "landscape.jpg",
                        "landscape.jpg",
                        "landscape.jpg",
                        "landscape.jpg",
                        "landscape.jpg", 
                        "landscape.jpg" ] 
    return (
      <div className="card-columns hidden">
        { roomsImgs.map( i => {
            return(    
              <MosaicCard folder_path={folder_path} image_url={i} />
            );
          })
        };      
      </div>
    );
  }
}

export default RoomsMosaic;
