import React, { Component } from 'react'
import './App.css'
import Navbar from './components/navbarComponent'
import Footer from './components/footerComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />

      </div>
    );
  }
}

export default App;
