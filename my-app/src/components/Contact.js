import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
 
class Contact extends React.Component {
  render() {
    return (
        <Container className="contact-container">
            <Container>
            <Row>
                <Col className="col-md .col-md-offset-1">
                    <h4 className="text-center mb-5">Leave a comment</h4>
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text" name="name" id="name" placeholder="Write your name here..." />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="Write your email here..." />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="comment-text" sm={2}>Comment</Label>
                            <Col sm={10}>
                                <Input type="textarea" name="comment-text" id="comment-text" placeholder="Leave your comment here..." />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button className="form-submit-btn mt-4">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                    <div className="col-md .col-md-offset-1 mt-5">
                        <h4>Comments</h4>
                        <div className="a-comment mt-2 mb-2">
                            <h6 className="pt-2 pr-2 pb-2 pl-3">Name: </h6>
                            <p className="pr-2 pb-2 pl-3">Comment text...</p>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Row className="justify-content-center mt-5">
                        <div className="text-center">
                            <h6>KANYARAT KLAYJINDA</h6>
                            <p>072 002 5016</p>
                            <h6>kanyarat0907@hotmail.com</h6>
                            <div className="social mt-5">
                                <h4>FÖLJ MIG</h4> 
                                <Row className="mt-4">  
                                <Col className="pl-5"><a href="https://www.facebook.com/kaewaiize"><img src="http://simpleicon.com/dev/wp-content/uploads/facebook-2-256x256.png" className="social-icon" /></a></Col>
                                <Col className="icon-col"><a href="https://twitter.com/Kaewaiize"><img src="https://www.shareicon.net/download/2015/08/04/79820_circle_512x512.png" className="social-icon"/></a></Col>
                                <Col className="icon-col"><a href="https://www.linkedin.com/in/kanyarat-klayjinda-5744b7bb"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" className="social-icon"/></a></Col>
                                </Row>
                            </div>  
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