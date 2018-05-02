import React, { Component } from "react";
import {Container, Col, Row} from "reactstrap";
import {tiger} from '../img/white_tiger.jpg';
import {coins} from '../img/coints.png';

class Exp extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h2>TIDIGARE PROJEKT</h2>
        </Row>
        <Row className="mt-5">
          <Col>
            <Row className="justify-content-center">
              <h5>TIGER LMS</h5>
              <img src={tiger} />
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-center">
              <h5>CATCH COINS</h5>
              <img src={coins} />
            </Row>
          </Col>
          <Col>
            <Row className="justify-content-center">
              <h5>EYEODA</h5>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Exp;