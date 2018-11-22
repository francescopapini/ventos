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
            <p>Cumbuco is a small town situated on
               the north-eastern coast of Brazil.</p>
            <p>Its weather conditions make it one of the best place
               in the world for Kite surfing.</p>
            <p>Fully equipped with shops, pharmacies and markets, 
               it has a quiet and sleepy vibe during the day but offers 
               an enjoyable night life with a good selection of restaurants, 
               bars and live music.</p>
            <p>Its proximity to Fortaleza makes it an ideal 
               location for a family weekend but also the perfect 
               place to visit the city. It can be reached from 
               Fortaleza airport in about 30 minutes.</p> 
          </div>
          <div className="col-lg-6">
            <img src={require("../../assets/images/landscape.jpg")} alt="" className="d-block w-100"/>
          </div>
        </div>
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <img src={require("../../assets/images/house_garden.jpg")} alt="" className="d-block w-100"/>
          </div>
          <div className="col-lg-6">
            <h2>The House</h2>
            <p>Ventos Do Cumbuco is the perfect place to enjoy a family weekend 
               on the beach or a Kite Surf holiday.</p>
            <p>Perfectly located just 2 minutes walk from the beach and next to 
               the famous Cumbuco's sand dunes, it is just a short walk to town.</p>  
            <p>The house boasts a double large living room with TV, 
               a fully equipped kitchen and 5 double/triple bedrooms,
               each with en-suite bathroom, two of which with large private balcony.
               In the ample garden you will be able to enjoy a private pool 
               with waterfall and a large barbecue area.</p>
            <p>Visit the gallery section for more pictures!</p>
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
 