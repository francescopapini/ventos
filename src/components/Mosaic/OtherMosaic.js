import React, { Component } from 'react'
import MosaicCard  from './MosaicCard'

class OtherMosaic extends Component {

  render() {
    const folder_path = "gallery/other_images/";
    const otherImgs = [ "test_image.jpg",
                        "test_image.jpg",
                        "test_image.jpg",
                        "test_image.jpg",
                        "test_image.jpg",
                        "test_image.jpg",
                        "test_image.jpg",
                        "test_image.jpg",
                        "test_image.jpg" ] 
    return (
      <div className="card-columns hidden">
        { otherImgs.map( i => {
            return(    
              <MosaicCard folder_path={folder_path} image_url={i} key={i} />
            );
          })
        }      
      </div>
    );
  }
}

export default OtherMosaic;
