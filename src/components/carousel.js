import React from 'react';

const Carousel = () => (
  <div className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src={require('../assets/images/landing/landing1.jpeg')}
          alt="First slide"
          className="d-block w-100"
        />
      </div>
      <div className="carousel-item">
        <img
          src={require('../assets/images/landing/landing2.jpeg')}
          alt="Second slide"
          className="d-block w-100"
        />
      </div>
      <div className="carousel-item">
        <img
          src={require('../assets/images/landing/landing3.jpeg')}
          alt="Second slide"
          className="d-block w-100"
        />
      </div>
      <div className="carousel-item">
        <img
          src={require('../assets/images/landing/landing4.jpeg')}
          alt="Second slide"
          className="d-block w-100"
        />
      </div>
    </div>
  </div>
);

export default Carousel;
