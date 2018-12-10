import React, { Component } from 'react'
import Carousel from '../Carousel';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <div className="container">
          <h1>Casa Ventos Do Cumbuco</h1>
          <p>Located a short walk to Cumbuco, in the north of Brazil, Ventos Do Cumbuco
             is the perfect place to spend a weekend on the beach or for some kitesurfing.
             Conveniently located within a short drive from Fortaleza, you could be on the 
             beach in less than half hour.</p>
          <p>Take a look at the Information page to know more about Cumbuco and the house.</p>    
        </div>
      </div>
    );
  }
}

export default Homepage;
 