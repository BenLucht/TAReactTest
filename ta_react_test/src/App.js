import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            This is a TechAcademy Test!
          </p>
          <a
            className="App-link"
            href="http://www.tech-academy.io"
            target="_blank"
            rel="noopener noreferrer"
          >
          TA
          </a>
        </header>
      </div>
    );
  }
}

export default App;
