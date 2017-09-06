import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/Header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Video likes sample</h2>
        </div>
      </div>

    );
  }
}

export default App;