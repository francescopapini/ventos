import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer container-fluid align">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          </div>
          <div className="col-md-6 col-lg-7 text-center text-md-right">
            <i className="fa fa-facebook mr-4"></i>
            <i className="fa fa-instagram white-text mr-lg-4"></i>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <p>Logo here</p>
          </div>
          <div className="col-lg-3">
            <h6 className="text-uppercase font-weight-bold"><strong>Address</strong></h6>
            <ul>
              <li>Ventos Do Cumbuco</li>
              <li>Avenida das Dunas n. 531</li>
              <li>Cumbuco, CEP 61600-000</li>
              <li>Caucaia, Ceara, Brazil</li>  
            </ul>
            
          </div>
          <div className="col-lg-3">
            <h6 className="text-uppercase font-weight-bold"><strong>Contacts</strong></h6>
            <ul>
              <li><i className="fa fa-phone mr-3"></i> + 01 234 567 88</li>
              <li><i className="fa fa-phone mr-3"></i> + 01 234 567 88</li>
              <li><i className="fa fa-envelope mr-3"></i> info@examlile.com</li>
              <li>
                <i className="fa fa-facebook mr-4"></i>
                <i className="fa fa-instagram white-text mr-lg-4"></i>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/information">Information</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/bookings">Bookings</Link></li>
          </ul>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">Copyright © 2018 Ventos Do Cumbuco
        </div>
      </footer> 
    );
  }
}

export default Footer;
 