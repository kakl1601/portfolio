import React, { Component } from "react";
import {Container, Col, Row} from "reactstrap";


class Knowledge extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <h2>FÄRDIGHETER</h2>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col>
          <h4 className="text-center">HTML5</h4>
          <div className="c100 p90 medium mt-4">
            <span>90%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          </Col>
          <Col>
            <h4 className="text-center">CSS3</h4>
            <div className="c100 p80 medium mt-4">
              <span>80%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </Col>
          <Col className="justify-content-center">
            <h4 className="text-center">Javascript</h4>
            <div className="c100 p60 medium mt-4">
              <span>60%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </Col>
          <Col>
            <h4 className="text-center">React</h4>
            <div className="c100 p65 medium mt-4">
              <span>65%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </Col>
          <Col>
            <h4 className="text-center">PHP</h4>
            <div className="c100 p50 medium mt-4">
              <span>50%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </Col>
          <Col>
            <h4 className="text-center">MYSQL</h4>
            <div className="c100 p50 medium mt-4">
              <span>50%</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </Col>
      </Row>
    </Container>
  );
 }
}

export default Knowledge;