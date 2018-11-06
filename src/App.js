import React, { Component } from 'react'
import './App.css'
import Navbar from './components/navbarComponent'
import Header from './components/headerComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
