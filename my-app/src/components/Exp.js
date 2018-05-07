import React, { Component } from "react";
import {Container, Col, Row, Button} from "reactstrap";
import tiger from'./../img/tiger.png';
import map from './../img/mobile2.png'
import plugin from './../img/eyeoda123.png';


class Exp extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h2>TIDIGARE PROJEKT</h2>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col className="proj text-center">
            {/* <Row className="justify-content-center"> */}
              <h6>Learning Management System</h6>
              <h5>TIGER LMS</h5>
              <img src={tiger} className="rounded mx-auto d-block proj-pic" />
              <Button href="https://github.com/callejover/tiger-LMS" className="form-submit-btn">Github</Button>
            {/* </Row> */}
          </Col>
          <Col className="proj text-center">
              <h6>GPS-baserat Mobilspel</h6>
              <h5>CATCH COINS</h5>
              <img src={map} className="rounded mx-auto d-block proj-pic" />
              <Button href="https://github.com/pyroface/team-pineapple" className="form-submit-btn">Github</Button>
          </Col>
          <Col className="proj text-center">
              <h6>Video Chat Web Plugin</h6>
              <h5>EYEODA</h5>
              <img src={plugin} className="rounded mx-auto d-block proj-pic" />
              <Button href="https://github.com/Paouii/web_plugin" className="form-submit-btn">Github</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Exp;