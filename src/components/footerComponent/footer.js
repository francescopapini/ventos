import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid">
        <div class="row py-4 d-flex align-items-center">
          <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          </div>
          <div class="col-md-6 col-lg-7 text-center text-md-right">
            <a class="fb-ic ml-0"><i class="fa fa-facebook white-text mr-4"> </i></a>
            <a class="tw-ic"><i class="fa fa-twitter white-text mr-4"> </i></a>
            <a class="gplus-ic"><i class="fa fa-google-plus white-text mr-4"> </i></a>
            <a class="li-ic"><i class="fa fa-linkedin white-text mr-4"> </i></a>
            <a class="ins-ic"><i class="fa fa-instagram white-text mr-lg-4"> </i></a>
          </div>
        </div>

          <div class="row">
            <div class="col-lg-4">
              <p>Logo here</p>
            </div>
            <div class="col-lg-2">
              <h6 class="text-uppercase font-weight-bold"><strong>Address</strong></h6>
              <p>Ventos Do Cumbuco</p>
              <p>Avenida das Dunas n. 531</p>
              <p>Cumbuco, CEP 61600-000</p>
              <p>Caucaia, Ceara, Brazil</p>
            </div>
            <div class="col-lg-2">
              <h6 class="text-uppercase font-weight-bold"><strong>Contact Us</strong></h6>
              <p><i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
              <p><i class="fa fa-envelope mr-3"></i> info@example.com</p>
            </div>
            <div class="col-lg-3">
              <p><Link to="/" className="nav-link">Home</Link></p>
              <p><Link to="/information" className="nav-link">Information</Link></p>
              <p><Link to="/gallery" className="nav-link">Gallery</Link></p>
              <p><Link to="/bookings" className="nav-link">Bookings</Link></p>
            </div>
          </div>
        <div className="footer-copyright text-center py-3">Copyright © 2018 Ventos Do Cumbuco
        </div>
      </footer> 
    );
  }
}

export default Footer;
 