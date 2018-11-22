import React, { Component } from 'react'

class Mosaic extends Component {
  render() {
    return (
      <div className="card-columns">
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        <div className="card">
          <img src={require("../assets/images/house_garden.jpg")} alt="" className="card-img-top"/>
        </div>
        
      </div>
    );
  }
}

export default Mosaic;
