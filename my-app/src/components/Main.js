import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import FirstPage from "./FirstPage";
import About from "./About";
import Knowledge from "./Knowledge";
import Exp from "./Exp";
import Contact from "./Contact";
import {} from 'react-bootstrap';
 
class Main extends React.Component {
  render() {
    return (
        <HashRouter>
            <div>
                <ul className="header">
                    <li className="nav-li"><NavLink exact to="/">K A N Y A R A T</NavLink></li>
                    <li className="nav-li float-right"><NavLink to="/Contact">KONTAKT</NavLink></li>
                    <li className="nav-li float-right"><NavLink to="/Exp">PROJEKT</NavLink></li>
                    <li className="nav-li float-right"><NavLink to="/Knowledge">FÄRDIGHETER</NavLink></li>
                    <li className="nav-li float-right"><NavLink to="/About">OM MIG</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={FirstPage}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Knowledge" component={Knowledge}/>
                    <Route path="/Exp" component={Exp}/>
                    <Route path="/Contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;