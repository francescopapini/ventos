import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        /*
        <header
        <div className="logo">
          Logo
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/information">Information</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact_us">Contact Us</Link></li>
          </ul>
        </nav>
        </ header>
        */

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="nav-brand">Logo</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/information" className="nav-link">Information</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact_us" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;
