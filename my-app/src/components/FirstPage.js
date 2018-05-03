import React, { Component } from "react";

class FirstPage extends React.Component {

 render() {

  const { weather } = this.props
  
   return (
     <div className="vertical-mid">
        <h1 className="text-center first-page-div-kanyatext mb-4"><span className="k">K</span>anyarat <span className="k">K</span>layjinda</h1>
        <h2 className="text-center first-page-div-undertext">The Front End Developer</h2>
        <div className="text-center">
        <p className="bottom-text mr-5">Current temperature in Stockholm: {(weather.temp-273.15).toFixed(1)} °C</p>
        </div>
     </div>
   );
 }
}

export default FirstPage;