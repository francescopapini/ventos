import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <img src={require('../../assets/images/flags/Brazil.png')} alt="" className="flag" />
      <img src={require('../../assets/images/flags/USA.png')} alt="" className="flag" />
      <img src={require('../../assets/images/flags/Spain.png')} alt="" className="flag" />
      <img src={require('../../assets/images/flags/Italy.png')} alt="" className="flag" />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/information" className="nav-link">
              Information
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bookings" className="nav-link">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
