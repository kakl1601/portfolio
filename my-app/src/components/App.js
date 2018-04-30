import React, { Component } from 'react';
import NavBar from './NavBar';
import logo from './../logo.svg';
import './../App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
