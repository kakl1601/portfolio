import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import FirstPage from "./FirstPage";
import About from "./About";
import Knowledge from "./Knowledge";
import Contact from "./Contact";
 
class Main extends React.Component {
  render() {
    return (
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink exact to="/">Kanya</NavLink></li>
                    <li><NavLink to="/About">OM MIG</NavLink></li>
                    <li><NavLink to="/Knowledge">KUNSKAPER</NavLink></li>
                    <li><NavLink to="/#">ERFARENHET</NavLink></li>
                    <li><NavLink to="/Contact">KONTAKT</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={FirstPage}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Knowledge" component={Knowledge}/>
                    <Route path="/Contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;