import React, { Component } from 'react'
import MosaicCard  from './MosaicCard'

class OtherMosaic extends Component {

  render() {
    const folder_path = "gallery/other_images/";
    const otherImgs = [ "other1.jpeg",
                        "other2.jpeg",
                        "other3.jpeg",
                        "other4.jpeg",
                        "other5.jpeg",
                        "other6.jpeg",
                        "other7.jpeg",
                        "other8.jpeg" ] 
    return (
      <div className="card-columns">
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
