import React, { Component } from 'react'
import GoogleMap from '../../components/map';

class Information extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Information</h1>
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <h2>Cumbuco</h2>
            <p>small village
               fully equipped with shops, pharmacies, restaurants, bars and night life
               ,short ride from fortaleza airport
               ,close to fortaleza to spend a day there  
            </p>
          </div>
          <div className="col-lg-6">
            <img src={require("../../assets/images/landscape.jpg")} className="d-block w-100"/>
          </div>
        </div>
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <img src={require("../../assets/images/house_garden.jpg")} className="d-block w-100"/>
          </div>
          <div className="col-lg-6">
            <h2>The House</h2>
            <p>5 rooms each with bathroom,
            2 main rooms with private balcony
            large living room and kitchen,
            pool with waterfall,
            large garden with barbecue area,
            short walk to beach,
            short walk to town,
            next to the sand dunes,
            link to see more pics in gallery
            </p>
          </div>
        </div>
        <div className="row">  
          <div className="col-lg-12">  
            <GoogleMap />
          </div>
        </div>
      </div>
    );
  }
}

export default Information;
 