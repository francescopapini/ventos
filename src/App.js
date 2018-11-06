import React, { Component } from 'react'
import './App.css'
import Navbar from './components/navbarComponent/navbar'
import Footer from './components/footerComponent/footer'
import Homepage from './components/pages/homePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
