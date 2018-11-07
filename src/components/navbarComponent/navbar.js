import React, { Component } from 'react'
 
class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          Logo
        </div>

        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>

      </nav>
    );
  }
}

export default Navbar;
