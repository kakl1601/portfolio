import React, { Component } from "react";
import {Container, Col, Row} from "reactstrap";
import ProfilePic from '../img/mypic2.jpg';
 
class About extends React.Component {
  render() {
    return (
      <div>
        <Container classNaew="about-container">
          <Row className="">
            <Col>
            <h2 className="mb-4 mt-4 text-center">ABOUT KANYARAT</h2>
            <p className="about-text text-center">Jag heter Kanyarat Klayjinda och brukar kallas för 'Kanya'. 
              Jag är front-end student på KYH i Stockholm. 
              Anledningen till varför jag har valt att plugga front-end är för att 
              jag är en person som brinner för webdesign och har en dröm att 
              kunna skapa webbsidor som alla älskar💕</p>
            </Col>
            <Col><img className="profile-pic mx-auto d-block mt-3" src={ProfilePic} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
 
export default About;