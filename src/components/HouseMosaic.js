import React, { Component } from 'react'
import Mosaic  from './Mosaic'
import MosaicCard  from './MosaicCard'

class HouseMosaic extends Component {

  render() {
    var folder_path = "gallery/house_images/";
    var houseImgs = [ "house_garden.jpg",
                      "house_garden.jpg",
                      "house_garden.jpg",
                      "house_garden.jpg",
                      "house_garden.jpg",
                      "house_garden.jpg",
                      "house_garden.jpg",
                      "house_garden.jpg" ] 
    return (
      <div className="card-columns">
        { houseImgs.map( i => {
            return(    
              <MosaicCard folder_path={folder_path} image_url={i} />
            );
          })
        };      
      </div>
    );
  }
}

export default Mosaic;
