import React, { Component } from 'react'
import MosaicCard  from './MosaicCard'

class OtherMosaic extends Component {

  render() {
    const folder_path = "gallery/house_images/";
    const houseImgs = [ "test_image.jpg",
                      "test_image.jpg",
                      "test_image.jpg",
                      "test_image.jpg",
                      "test_image.jpg",
                      "test_image.jpg",
                      "test_image.jpg",
                      "test_image.jpg",
                      "test_image.jpg" ] 
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
