import React from 'react';

const landingImage1 = require('../assets/images/landing/landing1.jpeg');
const landingImage2 = require('../assets/images/landing/landing2.jpeg');
const landingImage3 = require('../assets/images/landing/landing3.jpeg');
const landingImage4 = require('../assets/images/landing/landing4.jpeg');

const Carousel = () => (
  <div className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={landingImage1} alt="First slide" className="d-block w-100" />
      </div>
      <div className="carousel-item">
        <img src={landingImage2} alt="Second slide" className="d-block w-100" />
      </div>
      <div className="carousel-item">
        <img src={landingImage3} alt="Third slide" className="d-block w-100" />
      </div>
      <div className="carousel-item">
        <img src={landingImage4} alt="Fourth slide" className="d-block w-100" />
      </div>
    </div>
  </div>
);

export default Carousel;
