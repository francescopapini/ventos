import React from 'react'
import MosaicCard  from './MosaicCard'

const Mosaic = (props) => {
  props.images.map(i  => {
    return(    
      <MosaicCard folder_path={props.folder_path} image_url={i} />
    );
  })      
}

export default Mosaic;
