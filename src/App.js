import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, 
} from 'react-router-dom';
import './assets/css/default.min.css';
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import Homepage from './components/pages/HomePage';
import Information from './components/pages/Information';
import Gallery from './components/pages/Gallery';
import ContactUs from './components/pages/ContactUs';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container-fluid">
            <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/information' component={Information} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/bookings' component={ContactUs} />
          <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
