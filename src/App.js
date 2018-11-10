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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/Information' component={Information} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
