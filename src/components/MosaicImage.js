import React, { Fragment } from 'react';

const MosaicImage = (props) => {
    return (
        <Fragment>
            <img src={props.image} />
        </Fragment>
    )
}

export default MosaicImage;