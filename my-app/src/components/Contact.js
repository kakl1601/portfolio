import React, { Component } from "react";
import ContactForm from './ContactForm';
import Comments from './Comments';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 
class Contact extends React.Component {
  render() {
    return (
        <Container className="contact-container">
            <Container>
            <Row>
                <Col className="col-md .col-md-offset-1">
                    <h4 className="text-center mb-5 mt-3">Leave a comment</h4>
                    <ContactForm />
                    <Comments comment={this.props.comment}/>
                </Col>
                <Col>
                    <Row className="justify-content-center mt-5">
                        <div className="text-center">
                            <h6>KANYARAT KLAYJINDA</h6>
                            <p>072 002 5016</p>
                            <a href="mailto:kanyarat0709@hotmail.com" className="none-dec">kanyarat0907@hotmail.com</a>
                            <Container className="social mt-5">
                                <h4>FÖLJ MIG</h4> 
                                <Row className="mt-4">  
                                <Col><a className="social-icon" href="https://www.facebook.com/kaewaiize"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_black-128.png" className="social-icon" /></a></Col>
                                <Col><a className="social-icon" href="https://twitter.com/Kaewaiize"><img src="https://www.shareicon.net/download/2015/08/04/79820_circle_512x512.png" className="social-icon"/></a></Col>
                                <Col><a className="social-icon" href="https://www.linkedin.com/in/kanyarat-klayjinda-5744b7bb"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" className="social-icon"/></a></Col>
                                </Row>
                            </Container>  
                        </div>
                    </Row>
                </Col>
            </Row>
            </Container>
        </Container>
    );
  }
}
 
export default Contact;