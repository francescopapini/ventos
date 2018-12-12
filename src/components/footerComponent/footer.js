import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row py-5 align-items-center">
        <div className="col-lg-3">
          <p>Logo here</p>
        </div>
        <div className="col-lg-3">
          <h6 className="text-uppercase font-weight-bold">
            <strong>Address</strong>
          </h6>
          <ul>
            <li>Ventos Do Cumbuco</li>
            <li>Avenida das Dunas n. 531</li>
            <li>Cumbuco, CEP 61600-000</li>
            <li>Caucaia, Ceara, Brazil</li>
          </ul>
        </div>
        <div className="col-lg-4">
          <h6 className="text-uppercase font-weight-bold">
            <strong>Contacts</strong>
          </h6>
          <ul>
            <li>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </li>
            <li>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </li>
            <li>
              <i className="fa fa-envelope mr-3" /> renato.amantis@gmail.com
            </li>
            <li>
              <i className="fa fa-facebook mr-4" />
              <i className="fa fa-instagram white-text mr-lg-4" />
            </li>
          </ul>
        </div>
        <div className="col-lg-2">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/information">Information</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/bookings">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footer-copyright pt-4 col-lg-12 text-center">
          Copyright © 2018 Ventos Do Cumbuco
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
