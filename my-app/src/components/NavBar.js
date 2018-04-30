import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <header className="App-header">
            <nav>
                <ul className="nav navbar-nav pull-right">
                    <li><a href="#sec1">OM MIG</a></li>
                    <li><a href="#sec2">KUNSKAPER</a></li>
                    <li><a href="#sec3">ERFARENHET</a></li>
                    <li><a href="#sec4">KONTAKTA MIG</a></li>
                </ul> 
            </nav>
        </header>
      </div>
    );
  }
}

export default NavBar;
