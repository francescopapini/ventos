import React, { Component } from 'react'
import MosaicCard  from './MosaicCard'

class HouseMosaic extends Component {

  render() {
    const folder_path = "gallery/house_images/";
    const houseImgs = [ "house1.jpeg",
                        "house2.jpeg",
                        "house3.jpeg",
                        "house4.jpeg",
                        "house5.jpeg",
                        "house6.jpeg",
                        "house7.jpeg",
                        "house8.jpeg",
                        "house9.jpeg" ]
    return (
      <div className="card-deck">
        <div className="card-columns">
          { houseImgs.map( i => {
              return(    
                <MosaicCard folder_path={folder_path} image_url={i} key={i} />
              );
            })
          }      
        </div>
      </div>
    );
  }
}

export default HouseMosaic;
