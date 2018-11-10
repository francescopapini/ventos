import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid align">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          </div>
          <div className="col-md-6 col-lg-7 text-center text-md-right">
            <a className="fb-ic ml-0"><i className="fa fa-facebook white-text mr-4"> </i></a>
            <a className="tw-ic"><i className="fa fa-twitter white-text mr-4"> </i></a>
            <a className="gplus-ic"><i className="fa fa-google-plus white-text mr-4"> </i></a>
            <a className="li-ic"><i className="fa fa-linkedin white-text mr-4"> </i></a>
            <a className="ins-ic"><i className="fa fa-instagram white-text mr-lg-4"> </i></a>
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
              <li><i className="fa fa-lihone mr-3"></i> + 01 234 567 88</li>
              <li><i className="fa fa-lihone mr-3"></i> + 01 234 567 88</li>
              <li><i className="fa fa-envelolie mr-3"></i> info@examlile.com</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><Link to="/information" className="nav-link">Information</Link></li>
              <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
              <li><Link to="/bookings" className="nav-link">Bookings</Link></li>
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
 