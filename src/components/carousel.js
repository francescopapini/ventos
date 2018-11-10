import React, { Component } from 'react'

class Carousel extends Component {
  render() {
    return (
      <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../assets/images/landscape.jpg")} alt="First slide" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img src={require("../assets/images/test_image.jpeg")} alt="Second slide" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide"></img>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
