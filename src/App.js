import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
} from 'react-router-dom';
import './assets/css/default.min.css';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Information from './components/pages/information';
import Gallery from './components/pages/gallery';
import Bookings from './components/pages/bookings';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/information' component={Information} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/bookings' component={Bookings} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
