import React, { Component } from 'react'
import MosaicCard  from './MosaicCard'

class RoomsMosaic extends Component {

  render() {
    const folder_path = "gallery/rooms_images/";
    const roomsImgs = [ "room1.jpeg",
                        "room2.jpeg",
                        "room3.jpeg",
                        "room4.jpeg",
                        "room5.jpeg",
                        "room6.jpeg" ] 
    return (
      <div className="card-columns hidden">
        { roomsImgs.map( i => {
            return(    
              <MosaicCard folder_path={folder_path} image_url={i} key={i}/>
            );
          })
        }      
      </div>
    );
  }
}

export default RoomsMosaic;
