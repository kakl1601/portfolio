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
const API = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec'
const COMMENT_API = 'http://localhost:8080/comment'
 
class Main extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          weather: {
            temp: 273.15,
            pressure: 1014,
            humidity: 93,
            temp_min: 270.15,
            temp_max: 275.15},
        
        comment: []
        }
      }

      componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({ weather: data.main }));
          fetch(COMMENT_API)
          .then(response => response.json())
          .then(data => this.setState({ comment: data }));


      }
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
                        <Route exact path="/" render={() => <FirstPage weather={this.state.weather} />} />
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